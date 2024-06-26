import useGameCompanies from '../../hooks/useGameCompanies';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import useJwt from '../../hooks/useJwt';
import { useEffect, useState } from 'react';
import GameCard from '../GameCard';
import Loading from '../Loading';
import getAllGameDetails from '../../business/gameDetails';
import './index.css';

export default function CompanieDetails() {
	const id = useParams();
	const { jwt } = useJwt();
	const [loading] = useState(false);

	const gameCompanie = useGameCompanies(id);
	const dateCompanie = dayjs(gameCompanie?.createdAt).format('DD/MM/YYYY');
	const [gameDeveloped, setGameDeveloped] = useState();
	useEffect(() => {
		const arrayGameDev = [];

		async function getGameDetails(id) {
			return await getAllGameDetails(jwt, id);
		}

		async function getAllGames() {
			if (gameCompanie?.published?.ids) {
				const promises = gameCompanie.published.ids.map((id) =>
					getGameDetails(id),
				);
				const results = await Promise.allSettled(promises);

				results.forEach((result) => {
					if (result.status === 'fulfilled') {
						arrayGameDev.push(result.value);
					} else {
						console.error(result.reason);
					}
				});

				setGameDeveloped(arrayGameDev);
			}
		}
		getAllGames();
	}, [jwt, gameCompanie]);

	return (
		<div className="main">
			<div className="top">
				<h1>{gameCompanie.name}</h1>
				<p>Creation date : {dateCompanie}</p>
			</div>
			<p className="description">
				<span>Description :</span>{' '}
				{gameCompanie?.description
					? gameCompanie?.description
					: 'No description'}
			</p>
			<div className="games">
				<h2>Other games by this company :</h2>
				<div className="top-games-container">
					{loading ? (
						<Loading />
					) : gameDeveloped?.length > 0 ? (
						gameDeveloped?.map((game) => (
							<GameCard key={game.id} game={game} />
						))
					) : (
						<h2>No games found</h2>
					)}
				</div>
			</div>
		</div>
	);
}
