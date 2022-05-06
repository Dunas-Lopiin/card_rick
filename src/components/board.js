import React from "react";
import Card from "./card";

function Board(props){
    try{
        const itens = [...props.char_id];
        console.log(itens);
        const lista = itens.map(function(item, i){
            return <li><Card character={item} key={i}></Card></li>
            //return <li>{item}</li>; 
        })

        return(
            <board>
                <div className="episode">
                    <h3>{ props.name }</h3>
                </div>
                <ul>{lista}</ul>
            </board>
        )
    }
    catch{
        return(
            <board>
                <h3 className="episode">Algo deu errado</h3>
            </board>
        )
    }
}

export default Board;