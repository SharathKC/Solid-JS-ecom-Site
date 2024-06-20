import { useParams } from "@solidjs/router";
import { Show, createResource } from "solid-js";


const fetchData = async () =>{
    const res = await fetch('http://localhost:4000/products')
    return res.json()
   }

const Product = () => {
  const params = useParams();
  const [product] = createResource(params.id, fetchData);
 


  return (
    <Show when={product()} fallback={<p>Loading...</p>}>
      <div>
     
        <h1 onClick={addProduct}>Product ID: {product().id}</h1>
        <h2>{product().title}</h2>
        <img src={product().img} alt={product().title} />
        <p>{product().description}</p>
        <h3>Price: ${product().price}</h3>
        
      </div>
    </Show>
  );
};

export default Product;


// const Product=() =>
//     {
//         return(
//             <div>
//                 <p>Hello</p>
//             </div>
//         )

//     }
//     export default Product;
