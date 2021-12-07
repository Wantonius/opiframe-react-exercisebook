import React,{useContext} from 'react';
import ThemeContext from './ThemeContext';

const Paragraph:React.FC<{}> = ({children}) => {
	
	const theme = useContext(ThemeContext);
	
	return (
			<p style={{
				color:theme.textcolor,
				backgroundColor:theme.background
			}}>{children}</p>
	)
}


export default Paragraph;