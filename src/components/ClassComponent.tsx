import {Component} from "react";

class ClassComponent extends Component{
    render(){
        const title = "A class component"
        return <h1 className="text-center text-xl font-bold mt-12">{title}</h1>
    }
}

export default ClassComponent;