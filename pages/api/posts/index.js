import { getAllPosts } from 'utils/api';

export default async (req, res) => {
    switch (req.method) {
        case 'GET': {
            const posts = await getAllPosts();
            res.status(200).json(posts.edges);
            break;
        }
        default:
            res.status(400);
    }
};
