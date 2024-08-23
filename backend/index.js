const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

function returnResponse(res, message, color = 'black'){
	res.json({ 
		response: message,
		color: color 
	});
}

app.post('/command', (req, res) => {
	const { command } = req.body;
    const cmd = command.split(" ")
	switch(cmd[0].toLowerCase()){
		case 'test':
			returnResponse(res, "Test complete!", "green");
			break;
		default:
			returnResponse(res, "Invalid command.", "red");
			break;
	};
});

app.listen(port, () => {
	console.log(`API running at http://localhost:${port}`);
});
