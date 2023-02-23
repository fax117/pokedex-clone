import { GetPokemonResults, Pokemon } from "@/types";
import Image from 'next/image'
import imageLoader from '@/imageLoader'
import { GetServerSideProps } from "next";
import Layout from "@/components/Layout";
import { Card } from "@nextui-org/react";
import styles from "../../styles/Pokemon.module.css"

function PokemonPage({pokemon}: {
    pokemon: Pokemon
}){
    return (
        <Card > 
            <Card.Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              />
            <Card.Body>{pokemon.name}</Card.Body>
        </Card>
    )
}

PokemonPage.getLayout = function getLayout(page: typeof PokemonPage){
    return <Layout>{page}</Layout>
}
export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${context.query.id}/`
    );
    const pokemon = await res.json()
    return{
        props:{
            pokemon
        }
    }
}

export default PokemonPage;