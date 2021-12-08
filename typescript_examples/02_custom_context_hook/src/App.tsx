import React,{useState} from 'react';
import './App.css';
import ShoppingItem from './components/ShoppingItem';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';
import useTheme from './hooks/useTheme';

interface State {
	list:ShoppingItem[],
	id:number
}

function App() {
	
	const theme = useTheme();
	
	const [state,setState] = useState<State>({
		list:[],
		id:100
	});
	
	const addToList = (item:ShoppingItem) => {
		item.id = state.id;
		setState((state) => {
			return {
				list:state.list.concat(item),
				id:state.id+1
			}
		})
	}
	
	const toggleTheme = () => {
		if(theme) {
			theme.toggleTheme();
		}
	}
	
	const removeFromList = (id:number) => {
		setState((state) => {
			let tempList:ShoppingItem[] = state.list.filter(item => item.id !== id);
			return {
				...state,
				list:tempList
			}
		})
	}
	
	return (
		<div className="App">
			<button onClick={toggleTheme}>Toggle Theme</button>
			<ShoppingForm addToList={addToList}/>
			<hr/>
			<ShoppingList list={state.list} removeFromList={removeFromList}/>
		</div>
	);
}

export default App;
