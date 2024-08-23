import React, { useState, useLayoutEffect, useRef } from 'react';
import CommandInput from './CommandInput';
import ResponseDisplay from './ResponseDisplay';
import './styles.css';

function App() {
	const [responses, setResponses] = useState([]);
	const outputRef = useRef(null);

	const handleCommandSubmit = async (command) => {
		try {
			const response = await fetch('http://localhost:5000/command', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ command }),
			});
			const data = await response.json();
			setResponses((prevResponses) => [...prevResponses, data.response]);
		} catch (error) {
			console.error('Error communicating with the API:', error);
		}
	};

	useLayoutEffect(() => {
		if (outputRef.current) {
			outputRef.current.scrollTop = outputRef.current.scrollHeight;
		}
	}, [responses]);

	return (
		<div className='App'>
			<div className="Output" ref={outputRef}>
				<ResponseDisplay responses={responses} />
			</div>
			<div className="Input">
				<CommandInput onSubmit={handleCommandSubmit} />
			</div>
		</div>
	);
}

export default App;
