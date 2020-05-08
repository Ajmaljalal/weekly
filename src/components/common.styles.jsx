import styled from 'styled-components'
export const BodyContainer = styled.div`
  display:flex;
  width: 100%;
  height: 94%;
  flex-direction: column;
  padding: ${(props)=>props.isInChates ? '0' : '5px 15px'};
  box-sizing: border-box;
  border-top: 1px solid lightgrey;
  border-left: 1px solid lightgrey;
`;

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  max-width: 100%;
  height: 100%;
  background: #F0F2F5;
  box-sizing: border-box;
  overflow-y: hidden;
  overflow-x: auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  min-width: ${props => props.width};
  width: ${props => props.width};
  height: 95%;
  margin-right: ${props => props.marginRight ? props.marginRight : '0'};
  border: ${props => props.isDraggingOver ? '2px dashed purple' : '1px solid #AEABAB'};
  border-radius: 5px;
  padding: 8px;
  user-select: none;
  background: #E6E7E9;
`

export const VerticalScrollAbleContainer = styled.div`
  overflow-y: auto;
`
export const HorizontalScrollAbleContainer = styled.div`
  overflow-x: auto;
  width: 100%;
`
