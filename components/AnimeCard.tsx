import React from 'react';
import styled from "styled-components";
import {useMediaQuery} from "react-responsive";
import {IRecommended} from "../src/types";

const Card = styled.div<{isMobile: boolean, source: string}>`
  border-radius: 10px;
  margin-top: ${props => props.isMobile ? "10px" : "19px"};
  margin-bottom: ${props => props.isMobile ? "10px" : "19px"};
  margin-left: ${props => props.isMobile ? "10px" : "27px"};
  margin-right: ${props => props.isMobile ? "10px" : "27px"};
  background: ${(props) => `url(${props.source})`};
  width: ${props => props.isMobile ? "361px" : "201px"};
  height: ${props => props.isMobile ? "506px" : "282px"};
  display: flex;
  align-items: flex-end;
`

const AnimeName = styled.p<{isMobile: boolean}>`
  color: white;
  font-size: ${props => props.isMobile ? "32px" : "16px"};
  font-weight: 600;
  margin: 11px;
`

const Gradient = styled.div<{isMobile: boolean}>`
  background-image: linear-gradient(180deg, #D9D9D9 0%, rgba(0, 0, 0, 0) 0.01%, rgba(0, 0, 0, 0.69) 100%);
  border-radius: 10px;
  width: ${props => props.isMobile ? "361px" : "201px"};
  height: ${props => props.isMobile ? "174px" : "79px"};
  display: flex;
  align-items: flex-end;
`

const AnimeCard: React.FC<IRecommended> = ({ title , image}) => {
    const isMobile = useMediaQuery({query: '(max-width: 712px)'})
    return (
        <Card isMobile={isMobile} source={`${image}`}>
            <Gradient isMobile={isMobile}>
                <AnimeName isMobile={isMobile}>{title}</AnimeName>
            </Gradient>
        </Card>

    );
}

export default AnimeCard;
