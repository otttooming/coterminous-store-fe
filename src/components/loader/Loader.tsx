import * as React from "react";
import styled from "styled-components";

interface LoaderProps {
  isLoaderActive: boolean;
}

interface SpinnerProps {
  isDark: boolean;
}

const Wrapper = styled.aside`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Spinner = styled.span`
  width: 30em;
  height: 30em;
  border-radius: 50%;
  // position: fixed;
  // top: 50%;
  // left: 50%;
  // transform: translate3d(-50%, -50%, 0);
  animation: load8 1.1s infinite linear;
  // text-indent: -9999em;
  border-top: 5em solid rgba(255, 255, 255, 0.2);
  border-right: 5em solid rgba(255, 255, 255, 0.2);
  border-bottom: 5em solid rgba(255, 255, 255, 0.2);
  border-left: 5em solid #fff;
  font-size: 10px;
  z-index: 9999;
  border-top-color: ${({ isDark }: SpinnerProps) =>
    isDark ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)"};
  border-right-color: ${({ isDark }: SpinnerProps) =>
    isDark ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)"};
  border-bottom-color: ${({ isDark }: SpinnerProps) =>
    isDark ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)"};
  &:after {
    width: 30em;
    height: 30em;
    border-radius: 50%;
  }
  @keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = ({ isLoaderActive }: LoaderProps) => {
  if (!isLoaderActive) {
    return null;
  }

  return (
    <Wrapper>
      <Spinner isDark={true} />
    </Wrapper>
  );
};

export default Loader;
