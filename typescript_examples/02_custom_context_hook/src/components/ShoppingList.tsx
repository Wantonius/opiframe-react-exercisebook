import React from 'react';
import ShoppingItem from './ShoppingItem';
import useTheme from '../hooks/useTheme';

interface Props {
	list:ShoppingItem[],
	removeFromList:(id:number) => void
}

const ShoppingList:React.FC<Props> = (props:Props) => {
	
	const theme = useTheme();
	
	let items = props.list.map((item) => {
		return (
			<tr key={item.id}>
				<td>{item.type}</td>
				<td>{item.count}</td>
				<td>{item.price}</td>
				<td><button onClick={() => props.removeFromList(item.id)}>Remove</button></td>
			</tr>
		)
	})
	return (
		<table style={{
			color:theme.color,
			backgroundColor:theme.backgroundColor
		}}>
			<thead>
				<tr>
					<th>Type</th>
					<th>Count</th>
					<th>Price</th>
					<th>Remove</th>
				</tr>
			</thead>
			<tbody>
			{items}
			</tbody>
		</table>
	)
}

export default ShoppingList;