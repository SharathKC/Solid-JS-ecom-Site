import { render } from "solid-js/web";
import { createSignal } from "solid-js";


function Counter (){
    const[data,setData] = createSignal('Hello')
    const[age,setAge] = createSignal(26)
    const[bool,setBool]= createSignal(true)
    const[obj,setObj] = createSignal({name:{fname:'sharath',lname: 'KC'},age:26})


    //assign value
    setInterval(()=> {setData("Hey")},1000)
    setInterval(()=> {setAge(age()+1)},2000)
    setInterval(()=> {setBool(false)},3000)
    setInterval(()=> {setObj({name:{fname:'Arjun',lname:'VR'},age:30})},4000) 
    return(
        <div>
            <p>Data is : {data()}</p>
            <p>Age is :{age()}</p>
            <p>Boolean Value is :{bool().toString()}</p>
            <p>Oject Data name is {obj().name.fname}</p>
        </div>
    )
}