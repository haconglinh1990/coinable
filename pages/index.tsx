import type {GetServerSideProps, NextPage} from 'next'
import Head from 'next/head'
import axios from "axios";
import styled from 'styled-components';
import AnimeCard from "../components/AnimeCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Paging from "../components/Paging";
import {IRecommended} from "../src/types";

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
`

type HomePageProps = {
    recommendations: IRecommended[]
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    let recommendations: IRecommended[] = [];
    try {
        const response = await axios.get('https://api.jikan.moe/v4/recommendations/anime', {params: {page: context.query.page || 1}})
        response.data.data.map((recommend: any) => {
            recommend.entry.map((anime: any) => {
                if (!recommendations.find(ele => ele.mal_id === anime.mal_id)) {
                    recommendations.push({
                        mal_id: anime.mal_id,
                        title: anime.title,
                        image: anime.images.jpg.image_url
                    })
                }
            })
        });
    } catch (e) {
        console.log("error", e)
    }
    return { props: { recommendations } }
};

const Home: NextPage<HomePageProps> = ({recommendations}) => {
  return (
    <>
      <Head>
        <title>Coinable</title>
        <meta name="description" content="Coinable test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
        <Body>{recommendations.map((anime: IRecommended) =>
            <AnimeCard title={anime.title} image={anime.image} mal_id={anime.mal_id} key={`${anime.mal_id}`}/>
        )}
        </Body>
        <Paging/>
        <Footer />
    </>
  )
}

export default Home;
