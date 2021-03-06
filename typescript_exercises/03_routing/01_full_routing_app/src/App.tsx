import React from 'react';
import './App.css';
import HotelList from './components/HotelList';
import Navbar from './components/Navbar';
import HotelForm from './components/HotelForm';
import Details from './components/Details';
import HotelInfo from './models/HotelInfo';
import {Route,Switch} from 'react-router-dom';

interface State {
	list:HotelInfo[];
	id:number;
}

class App extends React.Component<{},State> {
	
	state:State = {
		list:[],
		id:100
	}
	
	addToList = (item:HotelInfo) => {
		item.id = this.state.id;
		this.setState((state) => {
			return {
				list:state.list.concat(item),
				id:state.id+1
			}
		})
	}
	
	removeFromList = (id:number) => {
		this.setState((state) => {
			let tempList = state.list.filter(item => item.id !== id)
			return {
				list:tempList
			}
		})
	}
	
	render() {
		return (
			<div className="App">
				<Navbar/>
				<hr/>
				<Switch>
					/*
					TODO Create three routes for "/", "/form" and "/hotel/:id". 
					First should render HotelList with
					props list={this.state.list} and removeFromList={this.removeFromList}
					Next should render HotelForm with addToList 
					Final should render Details with list={this.state.list}				
					*/

				</Switch>
			</div>
		);
	}
}

export default App;
