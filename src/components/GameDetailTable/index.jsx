import { Table } from 'antd';
import './index.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function GameDetailTable({
	data,
	title,
	uniqueKey,
	dataIndex,
	isCompanie,
}) {
	const columns = [
		{
			title: title,
			dataIndex: dataIndex,
			key: uniqueKey,
			render: (text, record) =>
				isCompanie ? (
					<Link to={`/companies/${record[uniqueKey]}`}>{text}</Link>
				) : (
					<a>{text}</a>
				),
		},
	];
	return <Table dataSource={data} columns={columns} rowKey={uniqueKey} />;
}

GameDetailTable.propTypes = {
	data: PropTypes.array,
	title: PropTypes.string.isRequired,
	uniqueKey: PropTypes.string.isRequired,
	dataIndex: PropTypes.string.isRequired,
	isCompanie: PropTypes.bool,
};
