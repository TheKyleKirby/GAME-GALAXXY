
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_GAME_DETAILS = gql`
    query GetGameDetails($name: String!) {
    igdbGame(name: $name) {
        id
        name
        summary
        rating
    }
    }
`;

const GameDetails = ({ gameName }) => {
    const { loading, error, data } = useQuery(GET_GAME_DETAILS, {
        variables: { name: gameName },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    const game = data.igdbGame[0];

    return (
        <div>
            {game ? (
                <div>
                    <h1>{game.name}</h1>
                    <p>{game.summary}</p>
                    <p>Rating: {game.rating}</p>
                </div>
            ) : (
                <p>No game found</p>
            )}
        </div>
    );
};

export default GameDetails;
