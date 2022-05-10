import styled from "styled-components";

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