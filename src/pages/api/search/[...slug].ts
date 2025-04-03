import type { NextApiRequest, NextApiResponse } from 'next';
import { BASE_URL } from '@/utils/constants';

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const API_KEY = process.env.API_KEY; // 클라이언트에서 접근 불가능!
  const { slug } = req.query;

  // slug가 undefined일 경우 빈 배열로 처리하여 에러 방지
  const [inputValue = '', fetchPage = '1'] = Array.isArray(slug) ? slug : [];

  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${inputValue}&page=${fetchPage}`
  );
  const data = await response.json();

  res.status(200).json(data);
}
