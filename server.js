const express = require("express");
const axios = require("axios");

const app = express();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyCFgFt3bYbbM-ZPK8NLzJGO1HmJjUXvync");
const model = genAI.getGenerativeModel({ model: "gemini-pro"});


app.use(express.json());

app.get("/api/gemini", async (req, res) => {
    const { prompt } = req.query;
    console.log(prompt);
    const defaultPrompt = "Give me points on how I can improve my prompting.";
    const finalPrompt = prompt || defaultPrompt;
    const result = await model.generateContent(finalPrompt);
    const response = await result.response;
    const text = response.text();
    res.json({ text });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});