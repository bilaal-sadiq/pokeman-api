async function fetchData(){

    try {

        const pokemanName = document.getElementById("pokemanName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemanName}`)

        if(!response.ok){
            throw new Error("Could not Fetch")
        }

        const data = await response.json();
        const pokemanSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemanSprite");

        imgElement.src = pokemanSprite;
        imgElement.style.display = "block"
    }

    catch(error){
    console.error(error); 
    }
}