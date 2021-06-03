import React,{ReactChild} from 'react';

interface NamedChildren {
	header:ReactChild;
	media?:ReactChild;
	data:ReactChild;
}

export default class ContactCard extends React.Component<NamedChildren> {
	
	render() {
		let cardStyle:React.CSSProperties = {
			backgroundColor:"green",
			height:200,
			width:150,
			textAlign:"center"
		}
		const {header,media,data} = this.props;	
		return(
			<div style={cardStyle}>
				<div>{header}</div>
				{media ? <div>{media}</div>:null}
				<div>{data}</div>
			</div>				
		)	
	}

}