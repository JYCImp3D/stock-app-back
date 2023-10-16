const router = require("express").Router();
const productController = require("../controllers/products");

router.post("/", productController.createProducts);
router.get("/", productController.getProducts);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
