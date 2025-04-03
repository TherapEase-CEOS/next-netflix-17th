import type { NextApiRequest, NextApiResponse } from 'next';
import { BASE_URL } from '@/utils/constants';
type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { type } = req.query;

  const API_KEY = process.env.API_KEY; // 클라이언트에서 접근 불가능!

  try {
    const response = await fetch(
      `${BASE_URL}/movie/${type}?api_key=${API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
  }
}
