import styled from 'styled-components';

export default styled.a`
   border:medium none;
   border-width: 1px;
   border-style: solid;
   border-color: rgba(255, 255, 255, 0);
   color: rgb(255, 255, 255);
   display:block;
   font-size: 2.1em;
   font-family: 'Source Sans Pro', sans-serif;
   font-weight:lighter;
   line-height: 50px;
   margin: 0 auto;
   margin-left:550px;
   margin-top:50px;
   padding:10px;
   text-align:center;
   text-decoration: none;
   width:750px;
   @media screen and (max-width: 1080px)
  {
    font-size:1.6em;
    margin-left:240px;
    display:inline-block;
    width:600px;
  } 
`;
