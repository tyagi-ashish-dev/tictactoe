import React from 'react';
import "./Square.css";

class Square extends React.Component{
    render(){
     return <button 
        className = {"square " + (this.props.value=="X"?"dark-symbol":"")} 
        onClick={()=>this.props.onClick()} 
        disabled={this.props.value?true:false}>
        {this.props.value}
       </button>
    }
} 

export default Square; 