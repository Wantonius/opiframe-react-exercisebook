import React,{useContext} from 'react';
import ThemeContext from './ThemeContext';

const Headline:React.FC<{}> = ({children}) => {
	
	const theme = useContext(ThemeContext);
	
	return (
			<h1 style={{
				color:theme.textcolor,
				backgroundColor:theme.background
			}}>{children}</h1>
	)
}


export default Headline;