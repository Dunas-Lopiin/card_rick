import React, { useEffect, useState } from "react";
import { ButtonStyled } from "../style/style";
import Modal from "./modal";

const Table = WrappedComponent  => {
    const [episode, setEpisode] = useState([]);
    const [id, setId] = useState(['1']);
    const [show, setShow] = useState(false);

    useEffect(() => {
        try{
          fetch('https://rickandmortyapi.com/api/episode/' + id).then(res => {
            if(res.status !==200){
                console.log("Algo deu errado!");
                return;
            }

            res.json().then(data => {
                if(data !== null){
                  setEpisode(data);
                  console.log(data);
                }
            })
          })
        }
        catch{
          console.log('não deu')
        }

    }, [id])

    return(
        <div className="Table">
            <header className="table-header">
            
              <input type="text" className="input" value={id} onChange={e => setId(e.target.value)} />
              <ButtonStyled onClick={() => setShow(true)}>Logout</ButtonStyled>
              <Modal onClose={() => setShow(false)} show={show}></Modal>
            </header>
            <div className="characters">
                <WrappedComponent char_id={episode.characters} name={episode.name}/>
            </div>
        </div>
    );
}

export default Table;