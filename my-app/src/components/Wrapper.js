import styled from "styled-components";

export default styled.div`
  background: -moz-linear-gradient(75deg, #FF7088 15%, #F2B69D 55%);
  background: -webkit-linear-gradient(75deg, #FF7088 15%, #F2B69D 55%);
  background: -ms-linear-gradient(75deg, #FF7088 15%, #F2B69D 55%);
  background: linear-gradient(75deg, #FF7088 15%, #F2B69D 55%);
  background-color: #f08c89;
  border: none;
  box-sizing:border-box;
  height: 920px;
  margin: 0 auto;	
  padding: 0 auto;  
  width:auto; 
  @media screen and (max-width: 1080px)
  {
    background: #f08c89;
    box-sizing:border-box;
    margin:0 auto;
    width:1024px;
    height:1366px;
  }
`;