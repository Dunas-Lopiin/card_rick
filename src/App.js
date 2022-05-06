import React, { useEffect, useState } from "react"
import Board from "./components/board";

function App(){
    const [episode, setEpisode] = useState([]);
    const [id, setId] = useState(['1']);

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
        <div className="App">
            <header className="App-header">
              <input type="text" className="input" value={id} onChange={e => setId(e.target.value)} />
            </header>
            <div className="characters">
                <Board char_id={episode.characters} name={episode.name} />
            </div>
        </div>
    );
}

export default App;
