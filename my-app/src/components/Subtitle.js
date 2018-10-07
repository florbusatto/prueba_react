import styled from 'styled-components';

export default styled.a`
   border-width: 1px;
   border-style: solid;
   border-color: rgba(255, 255, 255, 0);
   color: rgb(255, 255, 255);
   display:block;
   font-size: 2.0em;
   margin: 0 auto;
   margin-left:560px;
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
