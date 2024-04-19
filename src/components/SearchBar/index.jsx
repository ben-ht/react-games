import './index.css';

export default function SearchBar() {
    return (
        <div className="search-bar-container">
            <input type="text" placeholder="Search for a game..." />
            <button type="button" className="search-bar-button">
                <i>
                    <img src="/src/assets/search-icon.png" />
                </i>
            </button>
        </div>
    );
}