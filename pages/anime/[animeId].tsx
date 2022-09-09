import {NextPage} from "next";
import styled from "styled-components";
import {useMediaQuery} from "react-responsive";
import verified_icon from "../../public/verified_icon.png";
import goback_icon from "../../public/goback_icon.png";
import React from "react";
import Image from "next/image";
import {useRouter} from "next/router";

const Header = styled.button<{isMobile: boolean}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${props => props.isMobile ? "25px" : "40px"};
  background-color: white;
  border-width: 0px;
`
const HeaderText = styled.p`
  margin-left: 15px;
  font-size: 16px;
  font-weight: 600;
  line-height:20px;
`

const Body = styled.div<{isMobile: boolean}>`

  margin-left: ${props => props.isMobile ? "10px" : "0px"};
  margin-right: ${props => props.isMobile ? "10px" : "0px"};
`
const TopContent = styled.div<{isMobile: boolean}>`
  display: flex;
  flex-direction: ${props => props.isMobile ? "column" : "row"};
`
const DescriptionTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
`
const DescriptionContent = styled.p`
  font-size: 14px;
`
const MainContent = styled.div<{isMobile: boolean}>`
  margin-left: ${props => props.isMobile ? "0px" : "19px"};
  flex: 1;
`
const TitleLine = styled.div<{isMobile: boolean}>`
  display: flex;
  height: 29px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  margin-top: ${props => props.isMobile ? "10px" : "0px"};
`
const StatusLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const ScoreLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const ScoreBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ScoreRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const ScoreInfoBox = styled.div`
  display: flex;
  flex-direction: row;
`
const StatusText = styled.p`
  font-size: 14px;
  color: #A7A7A7;
`
const StatusValue = styled.p`
  font-size: 14px;
  font-weight: 600;
`

const ScoreText = styled.p`
  color: #B9B9B9;
  font-size: 24px;
  margin-top: 0;
`

const ScoreValue = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 0;
`
const GreyBorder = styled.div`
  background-color: #D9D9D9;
  height: 1px;
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
`
const Title = styled.p`
  margin-right: 11px;
  font-size: 24px;
  font-weight: 700;
`

const Img = styled.div<{ source: string, isMobile: boolean,}>`
  border-radius: 10px;
  background: ${(props) => `url(${props.source})`};
  width: ${props => props.isMobile ? "367px" : "270px"};
  height: ${props => props.isMobile ? "330px" : "330px"};
`

const AnimeDetail: NextPage<{}> = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 712px)'
    })
    const router = useRouter();
    const anime = router.query;
    return (
        <>
            <Header isMobile={isMobile} onClick={() => router.back()}>
                <Image src={goback_icon} width={8} height={12}  />
                <HeaderText>Go back to Main</HeaderText>
            </Header>
            <Body isMobile={isMobile}>
                <TopContent isMobile={isMobile}>
                    <Img source={anime.image as string} isMobile={isMobile}/>
                    <MainContent isMobile={isMobile}>
                        <TitleLine isMobile={isMobile}>
                            <Title>{anime.title}</Title>
                            {anime.approved && <Image src={verified_icon} width={24} height={24} />}
                        </TitleLine>
                        <StatusLine>
                            <StatusText>Type</StatusText>
                            <GreyBorder />
                            <StatusValue>{anime.type}</StatusValue>
                        </StatusLine>
                        <StatusLine>
                            <StatusText>Source</StatusText>
                            <GreyBorder />
                            <StatusValue>{anime.source}</StatusValue>
                        </StatusLine>
                        <StatusLine>
                            <StatusText>Episodes</StatusText>
                            <GreyBorder />
                            <StatusValue>{anime.episodes}</StatusValue>
                        </StatusLine>
                        <StatusLine>
                            <StatusText>Status</StatusText>
                            <GreyBorder />
                            <StatusValue>{anime.status}</StatusValue>
                        </StatusLine>
                        <ScoreInfoBox>
                            <ScoreLeft>
                                <ScoreValue>{anime.score}</ScoreValue>
                                <ScoreText>Score</ScoreText>
                            </ScoreLeft>
                            <ScoreBox>
                                <ScoreValue>{anime.rank}</ScoreValue>
                                <ScoreText>Rank</ScoreText>
                            </ScoreBox>
                            <ScoreRight>
                                <ScoreValue>{anime.popularity}</ScoreValue>
                                <ScoreText>Popularity</ScoreText>
                            </ScoreRight>
                        </ScoreInfoBox>
                    </MainContent>
                </TopContent>
                <DescriptionTitle>Description</DescriptionTitle>
                <DescriptionContent>{anime.description}</DescriptionContent>
            </Body>
        </>
    )
}

export default AnimeDetail;