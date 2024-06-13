import './index.css';
import { Button } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { useRef } from 'react';

export default function Pagination({ page, setPage, games }) {
	const previousButton = useRef(null);

	const goToPreviousPage = (e) => {
		let newPage = page - 1;
		if (page > 1) {
			setPage(newPage);
		}

		if (newPage < 2) {
			previousButton.current.disabled = true;
		}
	};

	const goToNextPage = () => {
		let newPage = page + 1;
		setPage(newPage);

		if (newPage > 1) {
			previousButton.current.disabled = false;
		}
	};

	return (
		<div className="pagination">
			<Button
				id="previous-page"
				ref={previousButton}
				size={'large'}
				onClick={goToPreviousPage}
				disabled={page === 1}
			>
				<LeftOutlined />
				Go to previous
			</Button>
			<div className="page-number">{page}</div>
			<Button
				id="next-page"
				size={'large'}
				onClick={goToNextPage}
				disabled={games.length < 25}
			>
				Go to next
				<RightOutlined />
			</Button>
		</div>
	);
}
