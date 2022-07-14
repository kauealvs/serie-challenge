const apiUrl = "https://fakerapi.it/api/v1/products";

export const getProducts = async () => {
  const data = await fetch(apiUrl);
  const responseProducts = await data.json();

  return responseProducts;
};
