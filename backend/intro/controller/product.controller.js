const products = require("../data/products");

const createProduct = async (req, res) => {
	try {
		const newArrival = req.body;
		const newProducts = [...products, newArrival];
		return res.status(201).json(newProducts);
	} catch (e) {
		console.log(e);
	}
};

module.exports = { createProduct };
