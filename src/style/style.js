import styled from "styled-components";

export const BaseModal = styled.div`
position:fixed;
left: 0;
top: 0;
right: 0;
bottom: 0;

background-color: rgba(0, 0, 0, 0.5);
display: flex;
align-items: center;
justify-content: center;
`;

export const ModalContent = styled.div`
width: 500px;
background-color: #fff;
border-radius: 10px;
`;

export const ModalHeader = styled.div`
padding: 10px;
`;

export const ModalFooter = styled.div`
padding: 10px;
`;

export const ModalTitle = styled.h4`
margin: 0;
`;

export const ModalBody = styled.div`
padding: 10px;
border-top: 1px solid #eee;
border-bottom: 1px solid #eee;
`;

export const ButtonStyled = styled.button`
width: 100px;
height: 35px;
border: none;
background-image: linear-gradient(to left, #48dafe, #00ff80);
border-radius: 5px;
&:hover{
    background-image: linear-gradient(to left, #1fafd3, #05ca67);
}
`;

export const BaseReddit = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-around;
`;

export const RedditHeader = styled.header`
background-image: linear-gradient(to right, #FE4880, #FFCE00);
box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
display: flex;
padding: 15px;
&:before {
    content:  'R/';
    display: inline-block;
    color: white;
    font-size: 32px;
    font-weight: 600;
    font-style: italic;
    text-transform: uppercase;
}
`;

export const RedditInput = styled.input`
display: inline-block;
color: white;
font-size: 32px;
font-weight: 600;
font-style: italic;
text-transform: uppercase;
background: none;
outline: none;
border: none;
appearance: none;
`;



export const CardBase = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 350px;
margin: 20px 15px 20px 15px;
flex-wrap: wrap;
`;

export const Dead = styled.div`
width: 100%;
background-image: linear-gradient(to right, #bd0000, #ff5e5e);
border: solid 2px #bd0000;
border-radius: 10px;
`;

export const Alive = styled.div`
width: 100%;
background-image: linear-gradient(to right, #3cff00, #ffffff);
border: solid 2px #3cff00;
border-radius: 10px;
`;

export const Unknown = styled.div`
width: 100%;
background-image: linear-gradient(to right, #646464, #ffffff);
border: solid 2px #646464;
border-radius: 10px;
`;

export const Unknown_banner = styled.h1`
position: relative;
top: -100px;
margin-top: -50px;
left: 0;
background-image: linear-gradient(to right, #646464, #ffffff);
width: 100%;
color: black;
text-align: center;
`;

export const Dead_banner = styled.h1`
position: relative;
top: -100px;
margin-top: -50px;
left: 0;
background-image: linear-gradient(to right, #bd0000, #ff5e5e);
width: 100%;
text-align: center;
color: white;
text-align: center;
`;

export const Title = styled.h2`
text-align: center;
padding: 0;
margin: 0;
`;

export const Info = styled.h3`
text-align: center;
padding: 0;
margin: 0;
`;

export const Image = styled.img`
width:200px;
height: auto;
`;

export const Banner_Image = styled.img`
width:200px;
height: auto;
padding-bottom: 12px;
`;

export const Article_base = styled.div`
padding: 30px 15px;
background-color: #FFF;
&:nth-child(2n){
    background-color: #F3F3;
};
&:hover{
    background-image: linear-gradient(to right, #fe487f7a, #FFCE007a);
};
`;

export const Article_A = styled.a`
text-decoration: none;
`;

export const Article_h3 = styled.h3`
color: #212121;
`;

/* 


.articles article:nth-child(2n){
    background-color: #F3F3;
}

.articles article:hover{
    background-image: linear-gradient(to right, #fe487f7a, #FFCE007a);
} */