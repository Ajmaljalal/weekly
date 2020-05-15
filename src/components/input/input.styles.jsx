import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: ${(props) => props.contentOnOneLine ? 'row' : 'column'};
    align-items: ${(props) => props.contentOnOneLine ? 'center' : ''};
    font-size: 13px;
    margin: 10px 0 5px 0;
`;

const Label = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;

const InputField = styled.input`
    padding: 9px;
    border: 1px solid lightgrey;
    border-radius: 3px;
    outline:none;
    &:focus {
        border: 1px solid grey;
    }
`;

export const InputStyles = {
    Wrapper,
    Label,
    InputField,
}