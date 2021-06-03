import React from 'react'

interface State {
	color:string
}

const Decorator = <P extends object>(Component:React.ComponentType<P>) => {	return class Decorator extends React.Component<P,State> {
		state:State = {
			color:"red"
		}
		
		update = (event:React.FormEvent<HTMLInputElement>) => {
			let state:any = {};
			state[event.currentTarget.name] = event.currentTarget.value;
			this.setState(state);
		}
		
		render() {
			return (
				<div>
					<Component {...this.props} color={this.state.color}/>
					<br/>
					<input type="text"
							name="color"
							onChange={this.update}
							value={this.state.color}/>
				</div>
			)
		}
	}	
}
export default Decorator;