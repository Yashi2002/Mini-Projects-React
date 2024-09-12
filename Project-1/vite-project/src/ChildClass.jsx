import React from "react";
export class ChildClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: "",
            age:0,
        };

        this.handleDocumentClick =()=>{
            console.log("Mount")
        }
    }
    componentDidMount(){
        console.log("Mount")

    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.name !== this.state.name){
           document.removeEventListener("click",this.handleDocumentClick)
           document.addEventListener("click",this.handleDocumentClick)

        }
    }
    
    componentWillUnmount(){
        document.addEventListener("click",this.handleDocumentClick)

        console.log("Unmount")
    }
    render(){
        return(
        <div>
            <input
            value={this.state.name}
            onChange={e => this.setState({name: e.target.value})}
            />
            <br/>
            <br/>
            <button
            onClick={()=>
                this.setState(currentState => {
                    return{
                        age: currentState.age - 1,
                    }
                })
            }
            >Click</button>
        </div>
        )
}
}