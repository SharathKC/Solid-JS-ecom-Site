import { useContext } from "solid-js"
import Card from "../Card"
import { CartContext } from "../../context/CartContext"

export default function Cart() {
 const { items } = useContext (CartContext)

 const total =()=>
    {
        return items.reduce((acc,p) => {
            return acc +p.quantity*p.price},0)
          
    }

return (
<div >
<Card
rounded={true}>
<h2>Your Shopping Cart</h2>
<For each={items}>
{(item) => (
<p>{item.title} - ${item.price} × {item.quantity}</p>
)}
</For>
<h3>Total Amount {total()} $</h3>
</Card>
</div>
)
}