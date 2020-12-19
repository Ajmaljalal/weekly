import styled from 'styled-components'
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:  2px 7px;
  box-sizing: border-box;
  width: 100%;
  min-height: 35px;
  // background: #2a4865;
  background: white;
  border-bottom: 1px solid lightgrey;
`;

const Middle = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 13%;
  width: 150px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: white;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

const UserName = styled.div`
  margin: 0 1px 0 5px;
  font-size: 12px;
  color: black;
  font-weight: 500;
`;

const OrgLogoWrapper = styled.div`
  margin-left: 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  img {
    width: 25px;
  }
  svg {
    margin-right: 8px;
  }
`;

const OrgLogo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  width: 165px;
    img {
      border-radius: 50%;
    }
`;

const OrgName = styled.div`
    margin-left: 2px;
    font-size: 12px;
`;


const CurrentProject = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
`;

const ProjectSettings = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
  border: .5px solid transparent;
`;

const ProjectTeam = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 400;
`;

export const HeaderStyles = {
  HeaderContainer,
  Middle,
  Right,
  Left,
  UserName,
  OrgLogoWrapper,
  OrgLogo,
  OrgName,
  CurrentProject,
  ProjectSettings,
  ProjectTeam,
}