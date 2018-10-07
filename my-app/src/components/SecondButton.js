import styled from 'styled-components';

export default styled.button`
  background: white;
  border: outset 1px;
  border-color: #fff;
  border-color: rgba(255, 255, 255, 0.75);
  border-top: 0;
  border-radius: 8px;
  color: palevioletred;
  display:inline-block;
  font-size: 1.3em;
  height:100px;
  letter-spacing: 3px;
  line-height: 4em;
  margin:0 auto;
  margin-left:750px;
  margin-top:100px;
  text-align:center;
  width:350px;
  @media screen and (max-width: 1080px)
  {
    padding: 1em 0 3em 0;
    font-size:1.2em;
    margin-left:350px;
    height:5px;
    display:inline-block;
    width:350px;
    border-radius:8px;
    text-align:center;
    margin-bottom:55px;
  }
`;
   