import React from 'react';

function ResponseDisplay({ responses }) {
	return (
		<div>
			{responses.map((response, index) => (
				<div key={index} >{response}</div>
			))}
		</div>
	);
}

export default ResponseDisplay;