export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'API key not configured' });
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    const payload = {
        contents: [{
            parts: [{ text: prompt }]
        }],
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorBody = await response.text();
            console.error('Gemini API Error:', errorBody);
            return res.status(response.status).json({ error: 'Failed to fetch from Gemini API' });
        }

        const result = await response.json();

        if (result.candidates && result.candidates[0] && result.candidates[0].content.parts[0].text) {
            const text = result.candidates[0].content.parts[0].text;
            res.status(200).json({ text: text });
        } else {
            res.status(500).json({ error: 'Invalid response structure from Gemini API' });
        }

    } catch (error) {
        console.error('Internal Server Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
