import React from "react";
import Square from "./Square";
import "./Game.css";

class Game extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            chance: true,
            gameOver: 0
        }
    }

    handleclick=(i)=>{
       if(this.state.gameOver>0)
          return;
       var squares = this.state.squares;
       var chance = this.state.chance;
       if(chance){
        squares[i] = 'X';
        this.setState(
            {
                squares: squares,
                chance: !this.state.chance
            }
        );
       }
       else{
        squares[i] = 'O';
        this.setState(
            {
                squares: squares,
                chance: !this.state.chance
            }
        );
       }

       let winner = this.calculateWinner();
       if(winner>0)
       {
           this.setState(
               {gameOver:winner}
               ); 
        }

    }
   
    calculateWinner=()=>{

        const squares = this.state.squares;
        var w = 0;
        const Winner = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [2,4,6],
            [0,4,8],
        ];
        Winner.map((v)=>{
          if(squares[v[0]] && squares[v[0]]===squares[v[1]] && squares[v[0]]===squares[v[2]] ){
            
            w= squares[v[0]]==='X'?1:2;
          }
          //return null; 
        },this)
        return w;      
    }

    info() {
            
            if(this.state.gameOver==0)
            {
                return <div> next turn { this.state.chance?"X":"O" }</div>
            }
            else
            {
                return <div> Winner: {this.state.gameOver==1?"X":"0"}</div>
            }
            
    }

    render(){
        const squares = this.state.squares;
        return (
            <React.Fragment>
           <div>
                { squares.map(function(val,index) {
                    
                    if(index%3 === 2)  
                        return( 
                        <div className="row" key={index}>
                            <Square 
                            onClick={()=>{this.handleclick(index)}}
                            value={squares[index]}
                            key={index}
                            />
                            
                        </div>
                        );
                    return (
                    <div key={index}>
                        <Square 
                        onClick={()=>{this.handleclick(index)}}
                         value={squares[index]}
                         key={index}
                         /> 
                    </div>
                    );
                },this) }
           </div> 
           {this.info()}

            </React.Fragment>
        );
    }
}

export default Game;
