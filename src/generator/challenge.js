import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = response.json();
  return data;
}

async function* getData(urlApi) {
  try {
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

    const productsToPrint = products.slice(0, 5);

    yield console.log(productsToPrint);
    yield console.log(product.title);
    yield console.log(category.name);

  } catch (error) {
    yield console.error(error);
  }
}

const show = getData(API);
show.next().value;
show.next().value;
show.next().value;