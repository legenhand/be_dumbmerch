const express = require("express");

const router = express.Router();

const { addUser, getUser} = require('../controllers/user');
const {addProduct, getAllProduct, getProductDetail, updateProduct, deleteProduct} = require("../controllers/product");
const {addCategory, getAllCategory, getCategoryDetail, updateCategory, deleteCategory} = require("../controllers/category");
const {addTransaction, getAllTransaction} = require("../controllers/transaction");
const {register, login} = require("../controllers/auth");

// Route Register
router.post("/register", register);

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
router.get("/transactions", getAllTransaction);

module.exports = router;