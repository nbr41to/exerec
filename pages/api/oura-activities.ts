import type { NextApiRequest, NextApiResponse } from 'next';
import { dateFormatted } from 'src/utils/dateFormatted';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { token } = JSON.parse(req.body);
  /* 一週間前 */
  const start_date = dateFormatted({
    date: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 7),
    format: 'YYYY-MM-DD',
  });
  const end_date = dateFormatted({
    date: new Date(),
    format: 'YYYY-MM-DD',
  });

  const result = await fetch(
    `https://api.ouraring.com/v2/usercollection/daily_activity?start_date=${start_date}&end_date=${end_date}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const activities = await result.json();
  res.status(200).json(activities.data);
}

// https://cloud.ouraring.com/v2/docs
