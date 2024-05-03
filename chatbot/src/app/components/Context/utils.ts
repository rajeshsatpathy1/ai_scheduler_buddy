import { IUrlEntry } from "./UrlButton";
import { ICard } from "./Card";
import { client } from "../../utils/redisDb";
import { useRef } from "react";
import { redirect } from 'next/navigation'

export async function crawlDocument(
  url: string,
  setEntries: React.Dispatch<React.SetStateAction<IUrlEntry[]>>,
  setCards: React.Dispatch<React.SetStateAction<ICard[]>>,
  splittingMethod: string,
  chunkSize: number,
  overlap: number
): Promise<void> {
  setEntries((seeded: IUrlEntry[]) =>
    seeded.map((seed: IUrlEntry) =>
      seed.url === url ? { ...seed, loading: true } : seed
    )
  );
  const response = await fetch("/api/crawl", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      url,
      options: {
        splittingMethod,
        chunkSize,
        overlap,
      },
    }),
  });

  const { documents } = await response.json();

  setCards(documents);

  setEntries((prevEntries: IUrlEntry[]) =>
    prevEntries.map((entry: IUrlEntry) =>
      entry.url === url ? { ...entry, seeded: true, loading: false } : entry
    )
  );
}

export async function clearIndex(
  setEntries: React.Dispatch<React.SetStateAction<IUrlEntry[]>>,
  setCards: React.Dispatch<React.SetStateAction<ICard[]>>
) {
  const response = await fetch("/api/clearIndex", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    setEntries((prevEntries: IUrlEntry[]) =>
      prevEntries.map((entry: IUrlEntry) => ({
        ...entry,
        seeded: false,
        loading: false,
      }))
    );
    setCards([]);
  }
}

export async function addUrl(event: React.FormEvent<HTMLFormElement>) {
  console.log("adding url");
  const formRef = useRef<HTMLFormElement>(null);
  event.preventDefault();
  const formData = new FormData(formRef.current!);
  var {urlLabel, url} = Object.fromEntries(formData)
  urlLabel = urlLabel+"";
  url = url+"";
  
    // create a url id
    const id = Math.floor(Math.random() * 100000)
  
    // add the url to the sorted set
    const unique = await client.zAdd('urls', {
      value: urlLabel,
      score: id
    }, { NX: true })
  
    if (!unique) {
      return {error: 'That book has already been added.'}
    }
    
    // save new hash for the book
    await client.hSet(`urls:${id}`, {
      urlLabel,
      url
    })
}