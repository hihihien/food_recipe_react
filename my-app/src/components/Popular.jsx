
function Popular() {

    const getPopular = async () => {
        const api = await fetch(`https://spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
        const data = await api.json();
        console.log(data);
    };

  return <div>Popular</div>;
}

export default Popular;