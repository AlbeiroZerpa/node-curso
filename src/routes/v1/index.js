const userController = require("../../controllers/v1/users-controller");
const productsController = require("../../controllers/v1/products-controller");

const createRoutesV1 = (app) => {
  app.get("/api/v1/users", userController.getUsers);
  app.get("/api/v1/users/:userId", userController.getUserById);
  app.get("/api/v1/products", productsController.getProducts);
};

module.exports = createRoutesV1;
