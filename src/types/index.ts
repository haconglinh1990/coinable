export type IAnime = {
    mal_id?: number,
    title: string,
    image: string,
    approved: boolean,
    type: string,
    source: string,
    episodes: number,
    status: string,
    score: number,
    rank: number,
    popularity: number,
    description: string
}

export type IRecommended = {
    mal_id: number,
    title: string,
    image: string
}