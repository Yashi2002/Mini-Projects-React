//Project 1
// import "./user.css"
// import user from "./user.json"
// import { UserCard } from "./UserCard"
// import { UserCardClass } from "./UserCardClass"

// export default function App() {
//   return (
//     <div>
//       <UserCard
//         name={user.name}
//         phoneNumber={user.phoneNumber}
//         age={user.age}
//         address={user.address}
//       />
//       <br />
//       <UserCardClass
//         name={user.name}
//         phoneNumber={user.phoneNumber}
//         age={user.age}
//         address={user.address}
//       />
//     </div>
//   )
// }

//Project-2
// import { FunctionComponent } from "./FunctionComponent"
// export default function App(){
//   return <FunctionComponent/>
// }

// Virtual DOM
// import { useState } from "react";
// // import { ChildClass } from "./ChildClass";
// import { Child } from "./Child";
// export default function App(){
//   const [isShown,setIsShown] = useState(true)
//   const childComponent = isShown ? <Child/>:null

//   return(
//     <div>
//       <button
//       style ={{display:"block", marginBottom: '1rem'}}
//       onClick={()=> setIsShown(s => !s)}
//       >
//         Show/Hide
//       </button>
//       {childComponent}
//     </div>
//   )
// }


// import {ClassComponent} from "./ClassComponent"
// import {FunctionComponent} from "./FunctionComponent"

// export default function App(){
//   return(
//     <div>
//       {/* <ClassComponent/> */}
//       {/* <br/>
//       <br/> */}
//       <FunctionComponent favoriteNumber={3} />
//     </div>
//   )
// }


// Project User List
// 

import React from "react"
const CUSTOM_HTML = `
<h1>Hi</h1>
<div>My name is Yashi</div>
`
function App(){
return <div dangerouslySetInnerHTML={{__html: CUSTOM_HTML}}></div>
}

export default App