import React from "react";
import {Article_base, Article_A, Article_h3} from "../style/style"


function Article(props){
    return(
        <Article_base>
            <Article_A href={ 'https://www.reddit.com' + props.article.permalink } target="_blank" >
                <Article_h3>{ props.article.title }</Article_h3>
            </Article_A>
        </Article_base>
    )
}

export default Article;