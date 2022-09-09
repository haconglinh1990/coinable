import axios from "axios";
import {NextApiRequest, NextApiResponse} from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const options = {
            method: 'GET',
            url: 'https://api.jikan.moe/v4/anime',
            params: {page: 1, limit: 5, q: req.query.q},
        };

        axios
            .request(options)
            .then(function (response) {
                res.status(200).json(response.data);
            })
            .catch(function (error) {
                console.error(error);
                res.status(error.status).json({ message: 'No data found' });
            });
    } else {
        res.status(400);
    }
}

