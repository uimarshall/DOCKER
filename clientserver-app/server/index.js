const keys = require("./keys");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
// cors = cross origin resource sharing
// it will enable us make req frm one domain e.g where React is running from to another port/domain where the express server/api is running frm
app.use(cors());
// Take the body of the request and turn it to json data, the frontend can then format d data
app.use(bodyParser.json());

// Postgress Client set up-To express server
const { Pool } = require("pg");
const pgClient = new Pool({
	user: keys.pgUser,
	host: keys.pgHost,
	database: keys.pgDatabase,
	password: keys.pgPassword,
	port: keys.pgPort
});
pgClient.on("error", () => console.log("Lost pg connection"));
pgClient
	.query("CREATE TABLE IF NOT EXISTS values (number INT)")
	.catch(err => console.log(err));

// Redis Client Setup
const redis = require("redis");

const redisClient = redis.createClient({
	host: keys.redisHost,
	port: keys.redisPort,
	//  Recconnect every 1s if connection lost
	retry_strategy: () => 1000
});

const redisPublisher = redisClient.duplicate();

// Express Route Handlers
app.get("/", (req, res) => {
	res.send("You request has been recorded, stay tune for response");
});

// Return all indices submitted to our application
app.get("/values/all", async (req, res) => {
	const values = await pgClient.query("SELECT * from values");
	res.send(values.rows);
});

app.get("/values/current", async (req, res) => {
	redisClient.hgetall("values", (err, values) => {
		res.send(values);
	});
});

app.post("/values", async (req, res) => {
	const index = req.body.index;
	if (parseInt(index) > 40) {
		return res.status(422).send("Index too high");
	}

	redisClient.hset("values", index, "Nothing yet!");
	//   Trigger worker
	redisPublisher.publish("insert", index, undefined);
	// Get the submitted index a7 permanently store it inside Postgres
	pgClient.query("INSERT INTO values(number) VALUES($1)", [index]);
	res.send({ working: true });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
