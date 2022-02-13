import React from "react";
import Square from "./Square";
import "./Game.css";

class Game extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            chance: true,
            
        }
    }
    gameOver=false;

    handleclick=(i)=>{
       if(this.gameOver)
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
       this.calculateWinner()
    }
    /* check val for rows
     */
    calculateWinner=()=>{

        const squares = this.state.squares;
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
        Winner.map(function(v,index){
          if(squares[v[0]] && squares[v[0]]==squares[v[1]] && squares[v[0]]==squares[v[2]] ){
            this.gameOver = true;  
            return squares[v[0]] + ' Won';     
          }
        },this)
        return 'Next Turn: ';       
    }

    WinnerInfo()
    {
        this.calculateWinner();
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
                        onClick={()=>this.handleclick(index)}
                         value={squares[index]}
                         key={index}
                         />
                        
                    </div>
                    );
                    return (
                    <div key={index}>
                        <Square 
                        onClick={()=>this.handleclick(index)}
                         value={squares[index]}
                         key={index}
                         /> 
                    </div>
                    );
                },this) }
           </div>
           <div>
               {this.calculateWinner()}
           </div>
        

            </React.Fragment>
        );
    }
}

export default Game;
/*
1. square component = squarebutton banana hai , 
2. Board Component = collection of square , pass index from board to square,
3. fill  
*/