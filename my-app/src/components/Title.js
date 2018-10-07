import styled from 'styled-components';

export default styled.a`
   border-color: rgba(255, 255, 255, 0);
   border-style: solid;
   border-width: 1px;
   color: rgb(255, 255, 255);
   display:block;
   font-size: 3.8em;
   margin: 0 auto;
   margin-left:480px;
   margin-top:120px;
   padding: 0.3em 1em;
   text-align:center;
   text-decoration: none;
   width:750px;  
   @media screen and (max-width: 1080px)
  {
    padding: 5em 0 4em 0;
    font-size:3.0em;
    margin-left:240px;
    margin-top:5px;
    display:inline-block;
    width:600px;
  } 
`;
