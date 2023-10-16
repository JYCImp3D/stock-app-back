const router = require("express").Router();
const productController = require("../controllers/products");

router.post("/", productController.createProducts);
router.get("/", productController.getProducts);
router.delete("/:id", productController.deleteProduct);

router.post("/movement/:productId", productController.createMovement);
router.delete("/movement/:id", productController.deleteMovement);

module.exports = router;
