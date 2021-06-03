import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactCard from './components/ContactCard';
import NamedChildrenCard from './components/NamedChildrenCard';

function App() {
  return (
    <div className="App">
		<ContactCard>
			<h3>Simple Contact Card</h3>
		</ContactCard>
		<NamedChildrenCard
			header={<h2>Complex Contact Card</h2>}
			media={<p>Media area</p>}
			data={<p>Contact Info area</p>}
		/>
		<NamedChildrenCard
			header={<h2>No Media Card</h2>}
			data={<p>Contact Info area</p>}
		/>
    </div>
  );
}

export default App;
