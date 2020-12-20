import styled from "styled-components";

export const Container = styled.div`
  /* width: 80%;
  height: calc(100% - 80px);
  margin: 65px auto; */
`;
export const Card = styled.div`
 width: 15rem;
height: 16.5rem;
  background-color: #fae5fc;
  border-radius: 20px;
  position: relative;
  margin: 6.4rem .2rem;
  display: flex;
  align-items: flex-end;
  padding: 1rem;
`;
export const CardImage = styled.img`
  src: ${(props) => props.src};
  width: auto;
  height: 150px;
  position: absolute;
  top: -64px;
  right: 30px;
  transition: all 0.5s ease;
  &:hover {
  transform:scale(1.3);
  }
  &:after {
    content:"";
  position:absolute;
  width:100%;
  bottom:1px;
  z-index:-1;
  transform:scale(.9);
  box-shadow: 0px 0px 8px 2px #000000;
  }
`;

export const AddButton = styled.button`
background-color:#e920ad;
width: 2.5rem;
height: 2.5rem;
color: #eee;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.5rem;
margin-top:.5rem;
border:none;
transition: all 0.5s ease;
  &:hover {
  transform:scale(1.3);
  }
&:focus{
  outline:none;
}
`;
export const CardContent = styled.div`
position: absolute;
top: 6rem;
width:86%;
`;
export const BrifInfo = styled.div`
display: flex;
flex-direction: column
`;

export const TopInfo = styled.span`
font-size: 16px;
font-weight: 600;

`;
export const ButtomInfo = styled.span`
font-size: 19px;
color: #e920ad;
margin-top: .3rem;
`;
export const CardContentText = styled.p`
font-size: 14px;
color: #b4a19d;
margin-top: .4rem;
margin-bottom:0;
`;
export const FavIcon = styled.div`
position: absolute;
bottom: 13rem;
font-size: 26px;
cursor: pointer;
transition: all 0.5s ease;
  &:hover {
  transform:scale(1.3);
  }
`;
