import React from 'react';
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import go_next_icon from "../public/go_next_icon.png";
import {IAnime} from "../src/types";

type CardProps = {
    anime: IAnime
}

const Card = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  margin: 20px 25px 20px 25px;
  align-items: center;
`

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
  width: 100%;
`
const MovieBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
`

const Title = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  margin: 0px;
`

const ContextText = styled.p`
  margin: 0px 1px 0px 1px;
  font-size: 14px;
  color: #757575;
`


const Img = styled(Image)`
  border-radius: 5px;
  width: 50px;
  height: 50px;
`

const AnimeSearchCard: React.FC<CardProps> = ({anime}) => {
    return (
        <Link href={{pathname: `/anime/${anime.mal_id}`, query: anime}} >
            <Card>
                <Img src={`${anime.image}`} width={50} height={50} layout={'fixed'}/>
                <ContentBox >
                    <Title>{anime.title}</Title>
                    <MovieBox>
                        <ContextText>{anime.type}</ContextText>
                        <ContextText> · </ContextText>
                        <ContextText>{anime.episodes} Episodes</ContextText>
                        <ContextText> · </ContextText>
                        <ContextText>{anime.status}</ContextText>
                    </MovieBox>
                </ContentBox>
                <Image src={go_next_icon} height={24} width={24} layout={'fixed'}/>
            </Card>
        </Link>
    );
}

export default AnimeSearchCard;
