import { useEffect, useState } from "react"; 

function Popular() {
    
    const [popular, setPopular] = useState([]);
     

    useEffect(() => {
        getPopular();
    },[]);
    
    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=29094c27cad640a791a7d50d78b5de3e&number=9`); 
        const data = await api.json();
        setPopular(data.recipes); 
    };

  return (
    <div>
    {popular.map((recipe) => {
        return (
            <div key={recipe.id}>
                <p>{recipe.title}</p> 
            </div>
        );
        })}
    </div>
  );
}

export default Popular;