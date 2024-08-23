import React, { useState, useEffect } from 'react';
import './styles.css';

function CommandInput({ onSubmit }) {
	const [command, setCommand] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (command.trim()) {
			onSubmit(command);
			setCommand(''); // Clear the input after submitting
		}
	};

	// Ensure scrolling to the bottom of the output area after each command submission
	useEffect(() => {
		const outputArea = document.querySelector('.console-output');
		if (outputArea) {
			outputArea.scrollTop = outputArea.scrollHeight;
		}
	}, [command]);

	return (
		<form onSubmit={handleSubmit} className="console-input-wrapper">
			<input
				type="text"
				className="console-input"
				value={command}
				onChange={(e) => setCommand(e.target.value)}
				placeholder="Enter command..."
			/>
			<button type="submit" className="console-button">Enter</button>
		</form>
	);
}

export default CommandInput;
