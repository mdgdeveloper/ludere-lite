import { getCover } from '../../data/dataHandler';

export default async (req, res) => {
	const body = JSON.parse(req.body);
	const result = await getCover(body.search);
	res.status(200).json(result);
};
