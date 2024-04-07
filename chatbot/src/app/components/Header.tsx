import Image from "next/image";
import PineconeLogo from "../../../public/pinecone.svg";
import VercelLogo from "../../../public/vercel.svg";
import aiSchedLogo from "../../../public/schedBuddy.svg"

export default function Header({ className }: { className?: string }) {
  return (
    <header
      className={`flex items-center text-gray-200 text-2xl ${className}`}
    >
      <Image
        src={aiSchedLogo}
        alt="pinecone-logo"
        width="100"
        height="100"
        className="ml-3"
      />{" "}
      <div className="text-4xl ml-3 mr-3">Chrono-Companion</div>
    </header>
  );
}
