import { useEffect } from "react"; 

function Popular() {
    
    useEffect(() => {
        getPopular();
    },[]);
    
    const getPopular = async () => {
        const resp = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=29094c27cad640a791a7d50d78b5de3e&number=9`); 
        const data = await resp.json();
        console.log(data);
    };

  return <div>Popular</div>;
}

export default Popular;