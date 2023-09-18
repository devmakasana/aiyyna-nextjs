import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  result: boolean;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const { payload } = req.body;
    const response = await axios.post(`${process.env.WEB_HOOK_API_URL}`, payload);
    if (response) {
      return res.status(200).json({ result: true });
    } else {
      return res.status(400).json({ result: false });
    }
  } catch (error) {
    return res.status(500).json({ result: false });
  }
}
