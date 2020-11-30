import styled from "styled-components";

export const Container = styled.div`
  /* width: 80%;
  height: calc(100% - 80px);
  margin: 65px auto; */
`;
export const Card = styled.div`
 width: 215px;
height: 230px;
  background-color: #fae5fc;
  border-radius: 20px;
  position: relative;
  margin: 10rem 10rem;
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
`;
export const AddButton = styled.button`
background-color:#e920ad;
width: 1.5rem;
height: 1.7rem;
color: #eee;
border-radius: 4px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.5rem;
border:none;
&:focus{
  outline:none;
}
`;
export const CardContent = styled.div`
/* position: absolute;
top: 5rem; */
`;

export const CardContentHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row-reverse;
position: relative;
top: 1rem;
`;

export const BrifInfo = styled.div`
display: flex;
flex-direction: column
`;

export const TopInfo = styled.span`
font-size: 14px;
font-weight: 600;

`;
export const ButtomInfo = styled.span`
font-size: 14px;
color: #e920ad;
margin-top: -.5rem;
`;
export const CardContentText = styled.p`
font-size: 14px;
color: #b4a19d;
margin-top: 1rem;
`;
export const FavIcon=styled.div`
position: absolute;
bottom: 180px;
font-size: 26px;
cursor: pointer;
transition: all 0.5s ease;
  &:hover {
  transform:scale(1.3);
  }
`;
