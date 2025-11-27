import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'wishlist.json');

type Data = {
    message?: string;
    count?: number;
    error?: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        const { email } = req.body;

        if (!email || !email.includes('@')) {
            return res.status(400).json({ error: 'Invalid email address' });
        }

        try {
            let wishlist: string[] = [];

            // Read existing data
            if (fs.existsSync(DATA_FILE)) {
                const fileData = fs.readFileSync(DATA_FILE, 'utf-8');
                wishlist = JSON.parse(fileData);
            }

            // Check for duplicates
            if (wishlist.includes(email)) {
                return res.status(200).json({ message: 'Already on the list!', count: wishlist.length });
            }

            // Add new email
            wishlist.push(email);

            // Save updated data
            fs.writeFileSync(DATA_FILE, JSON.stringify(wishlist, null, 2));

            return res.status(200).json({ message: 'Welcome to the resistance!', count: wishlist.length });
        } catch (error) {
            console.error('Wishlist error:', error);
            return res.status(500).json({ error: 'Failed to save data' });
        }
    } else if (req.method === 'GET') {
        try {
            let count = 0;
            if (fs.existsSync(DATA_FILE)) {
                const fileData = fs.readFileSync(DATA_FILE, 'utf-8');
                const wishlist = JSON.parse(fileData);
                count = wishlist.length;
            }
            return res.status(200).json({ count });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to fetch count' });
        }
    } else {
        res.setHeader('Allow', ['POST', 'GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
