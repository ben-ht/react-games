import './index.css';
import { useRef, useState } from 'react';
import { Carousel } from 'antd';

export default function GameCarousel({ screenshots }) {
	const [activeThumbnail, setActiveThumbnail] = useState(0);

	const slider = useRef();

	return (
		<div className="game-screenshots-carousel">
			<Carousel autoplay ref={(ref) => (slider.current = ref)}>
				{screenshots.map((screenshot) => (
					<div
						key={screenshot.id}
						className="game-screenshot-container"
					>
						<img src={screenshot.url} alt="In-game screenshot" />
					</div>
				))}
			</Carousel>

			<div className="game-screenshots-previews">
				{screenshots.map((screenshot, i) => (
					<div
						key={screenshot.id}
						className="game-screenshot-preview-container"
						onClick={() => {
							setActiveThumbnail(i);
							slider.current.goTo(i);
						}}
					>
						<img src={screenshot.url} alt="In-game screenshot" />
					</div>
				))}
			</div>
		</div>
	);
}
