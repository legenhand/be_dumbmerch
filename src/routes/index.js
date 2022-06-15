const express = require("express");

const router = express.Router();

const { addUser } = require('../controllers/register');
const {login} = require("../controllers/login");
const {addProduct, getAllProduct, getProductDetail, updateProduct, deleteProduct} = require("../controllers/product");
const {addCategory, getAllCategory, getCategoryDetail, updateCategory, deleteCategory} = require("../controllers/category");
const {addTransaction, getAllTransaction} = require("../controllers/transaction");

// Route Register
router.post("/register", addUser);

// Route Login
router.post("/login", login);

// Route Product
router.post("/product", addProduct);
router.get("/products", getAllProduct);
router.get("/product/:id", getProductDetail);
router.patch("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

// Route Category
router.post("/category", addCategory);
router.get("/categories", getAllCategory);
router.get("/category/:id", getCategoryDetail);
router.patch("/category/:id", updateCategory);
router.delete("/category/:id", deleteCategory);

// Route transaction

router.post("/transaction", addTransaction);
router.post("/transactions", getAllTransaction);

module.exports = router;