import styled from "styled-components";
import { Link as ReactLink } from "react-router-dom";
import BackgroundLogin from '../../assets/background.svg';
import Background from '../../assets/backleft2.svg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LeftContainer = styled.div`
  background-image: url(${BackgroundLogin});
  background-size: cover;
  background-position: center;

  width: 100%;
  height: 100%;
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
  }
  
`;

export const RightContainer = styled.div`
  background-image: url(${Background});
  background-color:#1E1E1E;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
  max-width: 50%;

  p {
    color: #FFFFFF;
    text-decoration: none;
    font-size: 16px;
    font-family: Poppins, sans-serif;
    font-weight: bold;
  }

  a {
    text-decoration: underline;
    color: #FFFFFF;
    font-family: Poppins, sans-serif;
    font-weight: 600;
  }
`;

export const Title = styled.h1`
  font-family: Road Rage, sans-serif;
  font-size: 40px;
  color: #9758A6;

  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  
  color: #FFFFFF;

  input {
    width: 100%;
    height: 52px;
    padding: 0 16px;
    border-radius: 5px;
    border: none;
  }

  label {
    font-size: 18px;
    font-family: Poppins, sans-serif;
    font-weight: 800;
  }

  span {
      font-family: Poppins, sans-serif;
      font-size: 10px;
      color: red;
    }
`;

export const Link = styled(ReactLink)`
  color: #FFFFFF;
  text-decoration: none;
  font-family: Poppins, sans-serif;
  font-weight: 600;
`;








