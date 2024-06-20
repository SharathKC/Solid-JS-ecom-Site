import { For, Show, createResource, createSignal } from 'solid-js';
import Card from './Card';
import { useCartContext } from '../context/CartContext';

const fetchData = async () => {
  const res = await fetch('http://localhost:4000/products');
  return res.json();
}

function Home() {
  const [products] = createResource(fetchData);
  const [darkmode, setDarkMode] = createSignal(false);
  const { items, setItems } = useCartContext();

  const addProduct = (product) => {
    const exists = items.find(p => p.id === product.id);
    if (exists) {
      setItems(p => p.id === product.id, "quantity", q => q + 1);
    } else {
      setItems([...items, { ...product, quantity: 1 }]);
    }
  }

  function darkmodefunction() {
    setDarkMode(!darkmode());
  }

  return (
    <Show when={products()} fallback={<p>Loading...</p>}>
      <div class="container">
        <For each={products()}>
          {(product) => (
            <Card class="card" title={product.title} style={{ }}>
              <h1 class="card h1">{product.id}</h1>
              <img class="card img" src={product.img} alt="Image card" />
              <p class="card p">{product.description}</p>
              <a href={'/product/' + product.id} class='btn'>View</a>
              <h2 class="card h2">$ {product.price}</h2>
              <button onClick={() => addProduct(product)} class='btn'>Add Cart</button>
            </Card>
          )}
        </For>
      </div>
    </Show>
  );
}

export default Home;

{/* <Show when={products()} fallback={<p>Loading</p>}>
<div class="container">
  <For each={products()}>
    {(product) => (
      <Card title={product.title} style={{ 'background-color': '#446b9e' }}>
        <h1>{product.id}</h1>
        <img src={product.img} alt="Image card" />
        <p>{product.description}</p>
        <h2>$ {product.price}</h2>
      </Card>
    )}
  </For>
</div>
</Show> */}