import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
require('dotenv').config();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
      const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL!; // Replace with your Discord webhook URL
      const discordMessage = {
        content: `## New message from the contact form:\n\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`,
      };

      await axios.post(discordWebhookUrl, discordMessage);

      return res.status(200).json({ message: 'Message sent successfully.' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'An error occurred while sending the message.' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed.' });
  }
}