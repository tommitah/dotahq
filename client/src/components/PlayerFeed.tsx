import React from 'react';
import { useQuery } from 'react-query';

type PlayerProps = {
    leaderboard_rank: null;
    rank_tier: number;
    solo_competitive_rank: null;
    competitive_rank: number;
    estimate: number;
    account_id: number;
    personaname: string;
    name: null;
    plus: boolean;
    cheese: number;
    steamid: string;
    avatar: string;
    avatarmedium: string;
    avatarfull: string;
    profileurl: string;
    last_login: Date;
    loccountrycode: string;
    status: null;
    is_contributor: boolean;
    is_subscriber: boolean;
};

export const PlayerFeed = () => {
    const getPlayers = async (): Promise<PlayerProps[]> => {
        const res = await fetch('https://localhost:9000/players');
        return res.json();
    };

    const { data, error, isLoading } = useQuery('players', getPlayers);

    if (error) return <div>Request Failed</div>;
    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            {data?.map((player: PlayerProps) => {
                return <Player {...player}></Player>;
            })}
        </div>
    );
};

const Player: React.FC<PlayerProps> = (props) => {
    return <div>{props.personaname}</div>;
};
