import { GetPokemonResults, Pokemon } from "@/types";
import Image from 'next/image'
import imageLoader from '@/imageLoader'

function PokemonPage({pokemon}: {
    pokemon: Pokemon
}){
    return (
        <div> 
            <h1>{pokemon.name}</h1>
            <Image
              loader={imageLoader}
              unoptimized
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width="200"
              height="200"
              />
        </div>
    )
}

export async function getStaticPaths() {
    const rest = await fetch("https://pokeapi.co/api/v2/pokemon/")
    const {results}: GetPokemonResults = await rest.json();

    return{
        paths: results.map((pokemon) => {
            return { params: { id: pokemon.url.slice(35,-1) }}
        }),
        fallback: false
    }
}

export async function getStaticProps({params} : {params: {id: string}}) {
    const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${params.id}/`
    );
    const pokemon = await res.json()
    return{
        props:{
            pokemon
        }
    }
}

export default PokemonPage;