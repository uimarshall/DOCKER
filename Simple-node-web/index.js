const express = require("express");
const app = express();
app.get("/", (req, res) => {
	res.send("Docker says hello hello hey!");
});

app.listen(8080, () => {
	console.log("Listening on port 5000");
});
