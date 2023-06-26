import axios from "axios";

const getProducts = async () => {
  const products = await axios.get(
    "https://skillfactory-task.detmir.team/products?page=1&limit=10"
  );
  return products.data;
};

const getProduct = async (id) => {
  const product = await axios.get(
    `https://skillfactory-task.detmir.team/products/${id}`
  );
  return product.data;
};
const productsService = {
  getProducts,
  getProduct,
};
export default productsService;
