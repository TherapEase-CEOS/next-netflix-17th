import type { NextApiRequest, NextApiResponse } from 'next';
import { BASE_URL } from '@/utils/constants';
type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { query } = req.query;

  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY; // 클라이언트에서 접근 불가능!

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?type=video&q=${query}&key=${YOUTUBE_API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
  }
}
