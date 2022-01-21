import { NextApiRequest, NextApiResponse } from 'next';

import api from '../../services/api';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    api
      .get('https://ip-fast.com/api/ip/')
      .then(response => {
        return res.json(response.data);
      })
      .catch(err => {
        return res.status(400).json(err);
      });
  }
}
