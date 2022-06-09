import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

function Searched() {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();
  
    const getSearched = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=29094c27cad640a791a7d50d78b5de3e&query=${name}`
        )
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };
  
    useEffect(() => {
        getSearched(params.search);
    },[params.search]);

    return (
    <Grid>
        {searchedRecipes.map((item) => {
            return(
                <Card key={item.id}>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                </Card>
            )
        })}
    </Grid>
  )
}

const Grid = styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-grap: 3rem;
`;

const Card = styled.div `
    img{
        innerWidth: 100%;
        border-radius; 2rem;
    }
    a{
        text-decoration: FaBorderNone;
    }
    h4{
        text-align: FaCentercode;
        padding: 1rem;
    }
`;

export default Searched