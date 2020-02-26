import React from 'react'

class Thanks extends React.Component{
    constructor(){
        super();
        this.state={
            name:"snehal"
        }
    }
    render(){
        return(
            <h3>
                Thank you{this.state.name}
            </h3>
        );
    }
}