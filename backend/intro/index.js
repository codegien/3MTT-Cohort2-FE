const express = require("express");
const cors = require("cors");
const products = require("./data/products");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("You are welcome!");
});

app.get("/api/products", (req, res) => {
	res.send(products);
});
app.post("/api/products", (req, res) => {
	const newArrival = req.body;
	const newProducts = [...products, newArrival];
	res.send(newProducts);
});

const PORT = 8000;

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}....`);
});
