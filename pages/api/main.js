import { getAllMainData } from 'utils/api';

export default async (req, res) => {
    switch (req.method) {
        case 'GET': {
            const allMainData = await getAllMainData();
            res.status(200).json(allMainData.edges);
            break;
        }
        default:
            res.status(400);
    }
};
