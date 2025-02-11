import styled from "styled-components";
import { Link } from "react-router-dom";



export const Container = styled.div`
  background-color: #1f1f1f;
  width: 100%;
  height: 72px;
  padding: 0 56px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
`;

export const Navigation = styled.nav`
display: flex;
justify-content: center;
align-items: center;
height: 72px;

div {
  margin-left: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  hr {
    border: 1px solid #625e5e;
    width: 100%;
    height: 24px;
  }

}

`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => (props.$isActive ? '#FF8C05' : '#FFFFFF')};
  border-bottom: ${ props => props.$isActive ? '1px solid #FF8C05' : 'none'};
  padding-bottom: 5px;
  font-size: 14px;
  transition: color 200ms;

  &:hover {
    color: #FF8C05;
    
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #FFFFFF;

  p {
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
  }  

  span {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #FF8C05;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
`;

export const Logout = styled.button`
  background-color: transparent;
  text-decoration: none;
  cursor: pointer;
  color: #FF3205;
  border: none;
  font-weight: 700;
  

`;