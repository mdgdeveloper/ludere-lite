import { searchGame } from '../../data/dataHandler';

export default async (req, res) => {
	const result = await searchGame(req.body.search);
	res.status(200).json(result);
};
