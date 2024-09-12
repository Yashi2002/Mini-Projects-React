// // import { useState } from "react";

// // export function Child() {
// //     const [name, setName] = useState("")

// // console.log("Render Child")

// // return(
// //     <div className = "child">
// //         <input value={name} onChange={e => setName(e.target.value)}/>
// //         <br/>
// //         My name is {name}.
// //     </div>
// // )
// // }

import { useState, useEffect} from "react"
let globalVar = 0
export function Child(){
    const [name,setName] = useState("")
    const[age,setAge] = useState(0)
    // const person = {name}
    // const[width,setWidth] = useState(window.innerWidth)

    // useEffect(() => {
    //     console.log("Name or count was changed",name,age)

    // },[name,age])

    globalVar = globalVar + 1
    console.log(globalVar)

    useEffect(() => {
        document.addEventListener("click",()=>{
            console.log("Click")
        })
        console.log("Mount")
        return()=>{
            console.log("Unmount")
        }
    },[]) 

    // useEffect(()=>{
    //     window.addEventListener("resize",()=>{
    //         setWidth(window.innerWidth)
    //     })
    // },[])

    // useEffect(()=>{
    //     const handler =() =>{
    //         console.log(name)
        
    //     }
    //     document.addEventListener("click",() => {
    //         console.log("inside")
    //     })
    //     return () => {
    //         document.removeEventListener("click",handler)
    //              console.log("cleanup")
    //     }
    // },[name])

    // useEffect(()=>{
    //     console.log(person)
    // },[person])


    return( <div>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <br/>
        <br/>
        <button onClick={()=> setAge(currentAge => currentAge -1)}>-</button>
        {age}
        <button onClick={()=> setAge(currentAge => currentAge +1)}>+</button>
        <br/>
        <br/>
        My name is {name} and I am {age} years old.
        {/* {width} */}

    </div>
    )
}

// //console log  the text Render each time the component re-renders

// import { useState, useEffect} from "react"

// export function Child(){
//     const [name,setName] = useState("")
//     const[age,setAge] = useState(0)

// //console log  the text Render each time the component re-renders
//         useEffect(() => {
//         console.log("Re-render")

//     })
//     //Hi mounting
//     useEffect(()=>{
//         console.log("Hi")
//     },[])

//     //Change whenver name and age changes

//     useEffect(()=>{
//         document.title = name
//     },[name])

//     //Updating documnent title to name whenver name changes
//     useEffect(()=>{
//         console.log(`Myname is ${name} and I'm ${age} year old. `)
//     },[name,age])
// //unmounted
//     useEffect(()=>{
//         console.log("Hi")
//         return ()=>{
//             console.log("Bye")
//         }
//     },[])

//     useEffect(()=>{
//         document.title = name
//         const timeout = setTimeout(()=>{
//             console.log(`My name is ${name}`)
//         },1000)

//         return()=>{
//             clearTimeout(timeout)
        
//         }
//     },[name])


//     return( <div>
//         <input type="text" value ={name} onChange={e => setName(e.target.value)}/>
//         <br/>
//         <br/>
//         <button onClick={()=> setAge(a => a -1)}>-</button>
//         {age}
//         <button onClick={()=> setAge(a => a +1)}>+</button>
//         <br/>
//         <br/>
//         My name is {name} and I am {age} years old.
//         {/* {width} */}

//     </div>
//     )
// }

// import React from "react";


// export class Child extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "",
//             age: 0,
//         };

//         this.handleDocumentClick = () => {
//             console.log("Document clicked");
//         };
//     }

//     componentDidMount() {
//         console.log("Mount");
//         document.addEventListener("click", this.handleDocumentClick);
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.name !== this.state.name) {
//             document.removeEventListener("click", this.handleDocumentClick);
//             document.addEventListener("click", this.handleDocumentClick);
//         }
//     }

//     componentWillUnmount() {
//         document.removeEventListener("click", this.handleDocumentClick);
//         console.log("Unmount");
//     }

//     render() {
//         return (
//             <div>
//                 <input
//                     value={this.state.name}
//                     onChange={(e) => this.setState({ name: e.target.value })}
//                 />
//                 <br />
//                 <br />
//                 <button
//                     onClick={() =>
//                         this.setState((currentState) => ({
//                             age: currentState.age + 1,
//                         }))
//                     }
//                 >
//                     Increase Age
//                 </button>
//                 <button
//                     onClick={() =>
//                         this.setState((currentState) => ({
//                             age: currentState.age - 1,
//                         }))
//                     }
//                 >
//                     Decrease Age
//                 </button>
//                 <p>Age: {this.state.age}</p>
//             </div>
//         );
//     }
// }
