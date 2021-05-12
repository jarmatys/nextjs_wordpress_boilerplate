import { getPaginatePost } from 'utils/api';

export default async (req, res) => {
    switch (req.method) {
        case 'GET': {
            const posts = await getPaginatePost(req.query.endCursor);
            res.status(200).json(posts);
            break;
        }
        default:
            res.status(400);
    }
};
