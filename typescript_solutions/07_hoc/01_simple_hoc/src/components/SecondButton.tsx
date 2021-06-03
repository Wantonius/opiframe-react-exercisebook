import React from 'react';
import Decorator from './Decorator';

interface Props {
	callback(message:string):void;
	color?:string
}

class SecondButton extends React.Component<Props> {

	callback = (event:React.SyntheticEvent) => {
		this.props.callback("You pressed the second button");
	}
	
	render() {
		let buttonStyle = {
			backgroundColor:this.props.color
		}
		return(
			<button style={buttonStyle} onClick={this.callback}>Click me!</button>
		)
	}
}

export default Decorator(SecondButton);