import React, { useState, useEffect } from 'react';
import Article from './article';
import {BaseReddit, ButtonStyled, RedditHeader, RedditInput} from "../style/style";
import Modal from './modal';


function Reddit() {
    const [articles, setArticles] = useState([]);
    const [subreddit, setSubreddit] = useState(['webdev']);
    const [show, setShow] = useState(false);

    useEffect(() => {
        fetch("https://www.reddit.com/r/"+ subreddit +".json").then(res => {
            if(res.status !== 200){
                console.log("Algo deu errado!")
                return;
            }

            res.json().then(data => {
                if(data !== null){
                    setArticles(data.data.children)
                }
            })
        });
    }, [subreddit]);


  return (
    <BaseReddit>
      <RedditHeader>
        <div>
          <RedditInput type="text" className="input" value={subreddit} onChange={e => setSubreddit(e.target.value)} />
        </div>
        <Modal onClose={() => setShow(false)} show={show}></Modal>
        <ButtonStyled onClick={() => setShow(true)}>Logout</ButtonStyled>
      </RedditHeader>
      <div className="articles">
        {
          (articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''
        }
      </div>
    </BaseReddit>
  );
}

export default Reddit;
