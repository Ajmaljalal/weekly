import styled from 'styled-components'

const Container = styled.div`
    width: ${(props) => props.width};
    border-radius: 3px;
    background: white;
    position: relative;
    box-shadow: 0px 0px 2px grey;
    
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    border-radius: 3px;
    box-sizing: border-box;
`;

const Search = styled.input`
    border: none;
    border-radius: 3px;
    outline:none;
    padding: 5px;
    width: 80%;
    box-sizing: border-box;
    &:disabled{
        background: white;
    }
`;


const Arrow = styled.div`
    width: 12px;
    height: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
    svg {
        width: 12px;
        height: 12px;
    }
`;

const Body = styled.div`
    width: 230px;
    height: auto;
    max-height: 200px;
    background: white;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    border-radius: 3px;
    position: absolute;
    box-shadow: 0px 0px 5px grey;
    margin-top: 5px;
    margin-bottom: 5px;
    left: 0;
    bottom: ${(props) => props.position === 'top' ? '40px' : 'auto'};
    z-index: 1000;
`;

export const DropdownStyles = {
    Container,
    Header,
    Search,
    Arrow,
    Body,
}