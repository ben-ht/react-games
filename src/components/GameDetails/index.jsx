import './index.css';
import { useParams } from 'react-router-dom';
import useGameScreenshots from '../../hooks/useGameScreenshots';
import useGameDetails from '../../hooks/useGameDetails';
import GameCarousel from '../GameCarousel';
import GameRating from '../GameRating';
import FavoriteButton from '../FavoriteButton';
import GameDetailTable from '../GameDetailTable';
import { useEffect, useState } from 'react';
import { getCompany } from '../../business/companies';
import useJwt from '../../hooks/useJwt';

export default function GameDetails() {
	const { jwt } = useJwt();

	const id = useParams();
	const screenshots = useGameScreenshots(id);
	const game = useGameDetails(id);

	const aggregatedRating = Number((game.aggregatedRating / 20).toFixed(2));
	const playerRating = Number((game.rating / 20).toFixed(2));

	const [gameCompanies, setGameCompanies] = useState([]);
	useEffect(() => {
		if (!game) {
			return;
		}

		async function getData() {
			const compArray = [];
			if (Array.isArray(game.involvedCompanies?.ids)) {
				await Promise.allSettled(
					game.involvedCompanies?.ids.map(async (company) => {
						const res = await getCompany(jwt, company);
						compArray.push(res);
					}),
				);
				setGameCompanies(compArray);
			}
		}
		getData();
	}, [jwt, game.involvedCompanies, game]);
	return (
		<div className="game-details-bg">
			<div className="game-details-container">
				<div className="game-details-title">
					<h1>{game.name}</h1>
					<FavoriteButton game={game} isDetail={true} />
				</div>
				<GameCarousel screenshots={screenshots} />
				<div className="game-description">{game.storyline}</div>

				<div className="game-ratings">
					<GameRating
						title="Aggregated Rating"
						rating={aggregatedRating}
						ratingCount={game.aggregatedRatingCount}
					/>
					<GameRating
						title="Players Rating"
						rating={playerRating}
						ratingCount={game.ratingCount}
					/>
				</div>
				<br />
				<div className="game-ratings">
					<GameDetailTable
						data={game?.platformsDetail}
						title={'Plateforms avalaible'}
						dataIndex={'name'}
						uniqueKey={'id'}
						isCompanie={false}
					/>
					<GameDetailTable
						data={gameCompanies}
						title={'Involved companies'}
						dataIndex={'name'}
						uniqueKey={'id'}
						isCompanie={true}
					/>
				</div>
				<hr />
				<div className="game-details-extra">
					<p>
						<b>Release date:</b>&nbsp;{' '}
						{game.firstReleaseDate?.substring(0, 10)}
					</p>
				</div>
			</div>
		</div>
	);
}
