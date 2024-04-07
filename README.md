# ai_scheduler_buddy
An effort to create an AI buddy that provides you with a schedule to accomplish your goals and add it to your calendar.

## Run the app
- `cd chatbot/`
- `npm run dev`
    - This command will help in running .env file which contains keys. This is because git doesn't support keys being uploaded, which is a valid way to protect keys. Please contact personally if required.

## Steps to Completion ✔️
- Design - Using Vercel Pinecone's version
- Available libraries (to make it possible) - nextjs, pinecone index, openApi (gpt-3.5-turbo,  text-embedding-ada-002)
- Tech Stack - React nextJs (server side rendering)
- Future Scope

### Design ▰▰▰▱▱▱▱▱▱▱▱▱ 
The current design uses a template from vercel pinecone https://vercel.com/templates/next.js/pinecone-vercel-ai. The github link is opensource. Effort is to add things to that. The following internal designs are currently getting worked on.
- An optimal prompt to design the output. [in chatbot\src\app\api\chat\route.ts]. Analysis required on how last messages is used to get get context from pinecone API response.
- Add pinecone index. Check for reducing the pinecone index multiple times and check if it is already present. Work into a word limited input which helps user to search the web to set their own context on through. [in urls.ts - currently is static, no api]

### Next steps ▱▱▱▱▱▱▱▱▱
- Work into checking if the chatbot output can be made interactible for next input.
- Creating an export file that can be used by existing popular calendar apps. Eg: .tcs files

### Future scope ▱▱▱▱▱▱▱▱▱
This can be discussed at a later point.