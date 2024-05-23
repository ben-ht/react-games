import { Table } from 'antd';
import './index.css';
import PropTypes from 'prop-types';

export default function GameDetailTable({ data, title, uniqueKey, dataIndex }) {
	const columns = [
		{
			title: title,
			dataIndex: dataIndex,
			key: uniqueKey,
			render: (text) => <a>{text}</a>,
		},
	];
	return <Table dataSource={data} columns={columns} rowKey={uniqueKey} />;
}

GameDetailTable.propTypes = {
	data: PropTypes.string,
	title: PropTypes.string,
	uniqueKey: PropTypes.string,
	dataIndex: PropTypes.string,
};
