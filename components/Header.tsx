import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import SearchBox from "./SearchBox";
import {useMediaQuery} from "react-responsive";

const HeaderBox = styled.div<{isMobile: boolean}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: ${props => props.isMobile ? "10px" : "27px"};
  margin-right: ${props => props.isMobile ? "17px" : "27px"};
  position: sticky;
  background-color: white;
  top: 0;
`

const DateBox = styled.div`
  text-align: right;
  font-weight: 500;
`
const AnimeText = styled.p`
  font-size: 24px;
  font-weight: 600;
`

const Header: React.FC = () => {
    const isMobile = useMediaQuery({query: '(max-width: 712px)'})
    const today = new Date();
    const dateStringLong = `Today is the ${today.getDate()}th of ${today.toLocaleString('default', {month: 'long'})}`;
    const dateStringShort = `${today.toLocaleString('default', {month: 'short'})} ${today.getDate()}th`;
    const dateString = isMobile ? dateStringShort : dateStringLong;
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <>
            {mounted &&
                <HeaderBox isMobile={isMobile}>
                    <AnimeText>Anime</AnimeText>
                    <SearchBox />
                    <DateBox>{dateString}</DateBox>
                </HeaderBox>
            }
        </>


  );
};

export default Header;
