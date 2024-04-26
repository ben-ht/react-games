import './index.css'

import { Carousel } from 'antd'

export default function GameCarousel({ screenshots }) {
    return (
        <div className="game-screenshots-carousel">
            <Carousel autoplay>
                {screenshots.map((screenshot) => (
                    <div key={screenshot.id} className='game-screenshot-container'>
                        <img src={screenshot.url} alt='In-game screenshot'/>
                    </div>
                ))}
            </Carousel>

            <div className='game-screenshots-previews'>
                {screenshots.map((screenshot) => (
                    <div key={screenshot.id} className='game-screenshot-preview-container'>
                        <img src={screenshot.url} alt='In-game screenshot'/>
                    </div>
                ))}
            </div>
        </div>
    )
}