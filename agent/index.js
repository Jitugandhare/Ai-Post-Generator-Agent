require('dotenv').config();
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(bodyParser.json());



// Search the web using Tavily
async function webSearch(query) {
    const url = 'https://api.tavily.com/search';
    const response = await axios.post(url, {
        api_key: process.env.TAVILY_API_KEY,
        query: query,
        max_results: 5,
        search_depth: "basic"
    });

    const results = response.data.results;
    return results.map(r => r.content).join(" ");
}

// Call Gemini (Google) API
async function callGemini(prompt) {
    const geminiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=' + process.env.GOOGLE_API_KEY;

    const payload = {
        contents: [{
            parts: [{ text: prompt }]
        }]
    };

    const response = await axios.post(geminiUrl, payload);
    const text = response.data.candidates[0].content.parts[0].text;
    return text;
}

// Route to generate and polish posts
app.post('/generate-posts', async (req, res) => {
    const topic = req.body.topic;

    try {
        // 1. Web search
        const content = await webSearch(topic);

        // 2. Summarize
        const summaryPrompt = `
You are a research assistant.
Summarize the following content into 4–5 clear, informative bullet points:

${content}
`;
        const summary = await callGemini(summaryPrompt);

        // 3. Generate social posts
        const socialPrompts = {
            linkedin: `
You are a social media manager.
Write a professional LinkedIn post based on this summary:
${summary}
`,
            twitter: `
You are a social media expert.
Write a catchy Twitter post under 280 characters based on this summary:
${summary}
`,
            instagram: `
You are a fun and casual content creator.
Write an Instagram caption using emojis and friendly tone based on this summary:
${summary}
`
        };

        const rawPosts = {};
        for (const [platform, prompt] of Object.entries(socialPrompts)) {
            rawPosts[platform] = await callGemini(prompt);
        }

        // 4. Polish the posts
        const polishPrompt = `
Polish these social media posts to better match their platform's tone:

- LinkedIn: Professional, informative
- Twitter: Under 280 characters, punchy
- Instagram: Friendly, emoji-friendly

Remove unnecessary characters, just keep the content which I have to show in my frontend.

Here are the drafts to polish:

${JSON.stringify(rawPosts, null, 2)}
`;

        const polishedPosts = await callGemini(polishPrompt);

        res.json({ summary, rawPosts, polishedPosts });

    } catch (error) {
        console.error("❌ Error:", error.message);
        res.status(500).json({ error: "Something went wrong" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
