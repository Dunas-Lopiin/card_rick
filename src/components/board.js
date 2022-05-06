import React from "react";
import Card from "./card";

function Board(props){
    try{
        const itens = [...props.char_id];
        console.log(itens);
        const lista = itens.map(function(item){
            return <li><Card character={item}></Card></li>
            //return <li>{item}</li>; 
        })

        return(
            <board>
                <h3>{ props.name }</h3>
                <ul>{lista}</ul>
            </board>
        )
    }
    catch{
        return(
            <board>
                <Card></Card>
            </board>
        )
    }
}

export default Board;