import { Table } from 'antd';
import './index.css';

export default function GamePlateforms({ plateforms }) {
	const columns = [
		{
			title: 'Platforms available',
			dataIndex: 'name',
			key: 'name',
			render: (text) => <a>{text}</a>,
		},
	];
	return <Table dataSource={plateforms} columns={columns} />;
}
