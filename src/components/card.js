import React, {useEffect, useState} from "react";

function Card(props){
    const [char, setChar] = useState([]);
    const chararacter = props.character;
    useEffect(() => {
        try{
            fetch(chararacter).then(res => {
                if(res.status !==200){
                    console.log("Algo deu errado!");
                    return;
                }
    
                res.json().then(data => {
                    if(data !== null){
                        setChar(data);
                    }
                })
            })
        }
        catch{
            setChar({"name": "", "image": "", "status": ""});
        }
    })
    if(char.status === 'Alive'){
        return(
            <card className="alive">
                <div>
                    <h2>{char.name}</h2>
                    <img src={char.image}></img>
                    <h3>Gender: {char.gender}</h3>
                    <h3>Species: {char.species}</h3>
                </div>
            </card>
        )
    }
    else if(char.status === 'Dead'){
        return(
            <card className="dead">
            <div>
                <h2>{char.name}</h2>
                <img src={char.image}></img>
                <div className="dead-banner">
                    <h1>MORTO</h1>
                </div>
                <h3>Gender: {char.gender}</h3>
                <h3>Species: {char.species}</h3>
            </div>
        </card>
        )
    }
    return(
        <card className="unknown">
        <div>
            <h2>{char.name}</h2>
            <img src={char.image}></img>
            <h1 className="unknown-banner">DESCONHECIDO</h1>
            <h3>Gender: {char.gender}</h3>
            <h3>Species: {char.species}</h3>
        </div>
    </card>
    )

    
}

export default Card;