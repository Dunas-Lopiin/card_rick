import React, {useEffect, useState} from "react";
import {Alive, Dead, Unknown, Title, CardBase, Dead_banner, Unknown_banner, Info, Image, Banner_Image } from "../style/style"

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
            <Alive>
                <Title>{char.name}</Title>
                <Image src={char.image}></Image>
                <Info>Gender: {char.gender}</Info>
                <Info>Species: {char.species}</Info>
            </Alive>
        )
    }
    else if(char.status === 'Dead'){
        return(
            <Dead>
                <Title>{char.name}</Title>
                <Banner_Image src={char.image}></Banner_Image>
                <Dead_banner>MORTO</Dead_banner>
                <Info>Gender: {char.gender}</Info>
                <Info>Species: {char.species}</Info>
            </Dead>
        )
    }
    return(
        <Unknown>
            <Title>{char.name}</Title>
            <Banner_Image src={char.image}></Banner_Image>
            <Unknown_banner>DESCONHECIDO</Unknown_banner>
            <Info>Gender: {char.gender}</Info>
            <Info>Species: {char.species}</Info>
        </Unknown>
    )
}

export default Card;