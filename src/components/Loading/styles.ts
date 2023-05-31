import styled from "styled-components";

export interface Props {
  status?: boolean;
}

export const Container = styled.div<Props>`
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  top: 0;
  left: 0;
  position: fixed;
  z-index: 99999;
  display: ${(p) => (p.status ? "flex" : "none")};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface SpinnerProps {
  color: string;
  background: string;
}
export const Spinner = styled.div<SpinnerProps>`
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 8em;
  height: 8em;
  border-radius: 50%;
  background: ${({ color }) => color};
  background: -moz-linear-gradient(
    left,
    ${({ color }) => color} 10%,
    rgba(231, 16, 55, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    ${({ color }) => color} 10%,
    rgba(231, 16, 55, 0) 42%
  );
  background: -o-linear-gradient(
    left,
    ${({ color }) => color} 10%,
    rgba(231, 16, 55, 0) 42%
  );
  background: -ms-linear-gradient(
    left,
    ${({ color }) => color} 10%,
    rgba(231, 16, 55, 0) 42%
  );
  background: linear-gradient(
    to right,
    ${({ color }) => color} 10%,
    rgba(231, 16, 55, 0) 42%
  );
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  &:before {
    width: 50%;
    height: 50%;
    background: ${({ color }) => color};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }

  &:after {
    background: ${({ background }) => background};
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
