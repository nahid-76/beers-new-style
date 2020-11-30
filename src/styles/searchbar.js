import styled from "styled-components";
export const SearchBarInput=styled.input`
margin-top: 3rem;
position: relative;
left: 40%;
background-color:#fae5fc;
border: none;
width: 25%;
@media (max-width: 768px) {
    width:80%;
    left:10%;
  }
padding: .7rem;
border-radius: 10px;
&:focus{
  outline:none;
}
`;