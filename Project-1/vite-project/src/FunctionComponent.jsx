import { useState} from "react"
import { DisplayString } from "./DisplayString"

export function FunctionComponent({favoriteNumber}){
    const [name,setName] = useState("")
    const[age,setAge] = useState(0)

    // let jsx
    // if(favoriteNumber != null){
    //     jsx =`My favorite number is ${favoriteNumber}`
    // }
    return <div>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <br/>
        <br/>
        <button onClick={()=> setAge(currentAge => currentAge -1)}>-</button>
        {age}
        <button onClick={()=> setAge(currentAge => currentAge +1)}>+</button>
        <br/>
        <br/>
        {favoriteNumber != null && `My favorite number is ${favoriteNumber}`}
        <br/>
        {favoriteNumber > 5 ? `My fav number is large` : `My fav number is small`}
        <DisplayString name={name} age={age}/>

    </div>

}