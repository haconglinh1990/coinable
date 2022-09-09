import React, {useCallback, useState} from 'react';
import styled from "styled-components";
import Image from 'next/image';
import search_icon from "../public/search_icon.png";
import close_icon from "../public/close_icon.png";
import Modal from 'react-modal';
import {useMediaQuery} from "react-responsive";
import axios from 'axios';
import { debounce } from 'lodash';
import AnimeSearchCard from "./AnimeSearchCard";
import {IAnime} from "../src/types";

const Container = styled.div`
    background-color: #EEEEEE;
    flex: 2;
    height: 35px;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 15px;
    margin-left: 5%;
    margin-right: 5%;
`

const Icon = styled(Image)`
  margin-top: 20%;
`

const Input = styled.input`
  background-color: #EEEEEE;
  width: calc(100% - 60px);
  align-self: center;
  height: 64px;
  margin-top: 13px;
  border-radius: 30px;
  border: 0px solid white;
  padding-left: 30px;
  padding-right: 30px;
  &:focus {
    outline: none;
    border-color: white;
  }
`

const SearchText = styled.p`
  background-color: #EEEEEE;
  margin-left: 5px;
  color: #BABABA;
  width: 80%;
`

const SearchBar = styled.div`
  border-radius: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const SearchModal = styled(Modal)`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

const Content = styled.div<{isMobile: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  //align-self: center;
  padding-top: 20%;
  padding-left: 10px;
  padding-right: 17px;
  width: calc(100% - 30px);
  max-width: ${props => props.isMobile ? "360px" : "588px"};
`

const NoData = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 30px;
  margin-top: 19px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const NoDataText = styled.p`
  font-size: 16px;
  font-weight: 500;
`

const ListResult = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 30px;
  margin-top: 19px;
`

const SearchBox: React.FC = () => {
    const isMobile = useMediaQuery({query: '(max-width: 712px)'})
    const [modalOpen, setModalOpen] = useState(false)
    const [keywords, setKeywords] = useState("")
    const [results, setResults] = useState(Array<IAnime>);
    const [isLoading, setIsLoading] = useState(false);
    const debounceSearch = useCallback(
        debounce(async(query: string) => {
            try {
                const res = await axios.get(`/api/search?q=${query}`)
                const finalResult: IAnime[] = res.data.data.map((result: any) => ({
                    mal_id: result.mal_id,
                    title: result.title,
                    image: result.images.jpg.large_image_url,
                    approved: result.approved,
                    type: result.type,
                    source: result.source,
                    episodes: result.episodes,
                    status: result.status,
                    score: result.score,
                    rank: result.rank,
                    popularity: result.popularity,
                    description: result.synopsis
                }))
                setResults(finalResult);
            } catch (e) {
                setResults([]);
                console.log("e: " + e)
            }
            setIsLoading(false)
        }, 300) , [])

    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = (event.target as HTMLInputElement).value;
        setKeywords(value)

        if(value.length > 0) {
            setIsLoading(true)
            debounceSearch((event.target as HTMLInputElement).value)
        }
    }

  return (
      <Container>
          <SearchBar onClick={(event) => !modalOpen && setModalOpen(true) }>
              <Image src={search_icon} width={18} height={18} />
              <SearchText>Search...</SearchText>
          </SearchBar>
          <SearchModal isOpen={modalOpen}>
              <Content isMobile={isMobile}>
                  <Icon src={close_icon} width={14} height={14} onClick={() => setModalOpen(false)}/>
                  <Input type="text"
                         onChange={onSearchChange}
                         value={keywords}
                         placeholder={"You can search for ‘Kyoukai no Kanata’ for example"}
                  />
                  {keywords && results.length > 0 &&
                      <ListResult>{results.map((anime: IAnime) => <AnimeSearchCard anime={anime} key={anime.mal_id}/>)}</ListResult>
                  }

                  {keywords && results.length === 0 && !isLoading &&
                      <NoData><NoDataText>Oops it seems there is nothing for ‘{keywords}’</NoDataText></NoData>
                  }
              </Content>
          </SearchModal>
      </Container>
  );
};

export default SearchBox;
