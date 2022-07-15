const apiUrl = "https://dummyjson.com/products";

export const getProducts = async () => {
  const data = await fetch(apiUrl);
  const responseProducts = await data.json();

  return responseProducts.products;
};
