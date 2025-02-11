import styled from "styled-components";

export const ContainerButton = styled.button`
  background-color: #9758A6;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 52px;
  font-family: Road Rage, sans-serif;
  font-size: 30px;

  &:hover {
    background-color: #6F357C;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='%23F9F5F5FF' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 5px;
  }
`;
