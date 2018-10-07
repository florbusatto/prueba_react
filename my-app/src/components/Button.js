import styled from 'styled-components';

export default styled.button`
  background: rgba(255, 255, 255, 0.15);
  border: solid 1px;
  border-color: #fff;
  border-color: rgba(255, 255, 255, 0.75);
  border-top: 0;
  border-radius: 0 0 0.35em 0.35em;
  color: #fff;
  display:inline-block;
  font-size: 1.5em;
  height:90px;
  letter-spacing: 3px;
  line-height: 4em;
  margin:0 auto;
  margin-left:200px;
  padding: 0.25em 1em;
  text-align: center;
  text-transform: uppercase;
  width:350px;
  @media screen and (max-width: 1080px)
  {
    padding: 5em 0 4em 0;
    font-size:1.0em;
    height:1px;
    margin-left:100px;
    display:inline-block;
    width:250px;
  }
`;
   