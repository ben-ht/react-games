import { Table } from 'antd';
import './index.css';

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
