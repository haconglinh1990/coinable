import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {useMediaQuery} from "react-responsive";

interface MainProps {
  children: ReactElement;
}

const Container = styled.div<{isMobile: boolean}>`
  width: ${props => props.isMobile ? "390px" : "766px"};
`

const MainLayout: React.FC<MainProps> = ({ children }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 712px)'
  })
  return (
      <Container isMobile={isMobile}>{children}</Container>
  );
};

export default MainLayout;
