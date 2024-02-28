import styled from "@emotion/styled";
const Boton = styled.button`
  display: block;
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid #d1d1d1;
  border-radius: 10px;
  padding: 1rem 2rem;
  margin: 2rem auto;
  text-align: center;
  background-color: ${(props) => (props.bgColor ? "#1DA507" : "white")};
  color: ${(props) => (props.bgColor ? "white" : "#000")};
  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 490px) {
    padding: 0.8rem 0rem;
    font-size: 1.2rem;
  }
`;

export default Boton;
