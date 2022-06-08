import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import  { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { GiRodOfAsclepius } from 'react-icons/gi';
import { FaBorderNone, FaCentercode } from 'react-icons/fa';

function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=29094c27cad640a791a7d50d78b5de3e&cuisine=${name}`
        )
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    useEffect(() => {
        getCuisine(params.type);
        console.log(params.type);
    }, [params.type]);
  
  
    return (
        <Grid>
        {cuisine.map((item) => {
            return (
                <Card>
                    <img src={item.img} alt="" />
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

export default Cuisine;