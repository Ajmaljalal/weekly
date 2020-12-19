import styled from 'styled-components'

const MenuBar = styled.div`
  height:100%;
  width: 3.3%;
  min-width: 48px;
  max-width: 48px;
  // background: #2a4865;
  background: white;
  display: flex;
  flex-direction: column;
  // border-top: 0.5px solid #2565AE;
  justify-content: space-between;
  border-right: 1px solid lightgrey;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
    img {
      width: 30px;
      height:30px;
    }
`;
const MenuItemsTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin-top: 5px;
  cursor: pointer;
`;


const Image = styled.img`
    width: 25px;
    height: 25px;
    background: ${(props) => props.isActive ? 'white' : 'none'};
    margin: 2px 0;
    padding: 4px;
    border-radius: 5px;
    border: 3px solid transparent;
    &:hover{
      border: 3px solid white;
    }
`;

export const MenuStyles = {
  MenuBar,
  Logo,
  MenuItemsTop,
  Image
}