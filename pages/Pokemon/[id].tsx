import { GetPokemonResults, Pokemon } from "@/types";
import Head from 'next/head'
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
        <>
        <Head>
            <title>Pokédex | Temporaldomain.com</title>
            <meta name="description" content="Next.JS App created by Fabricio Fuentes" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Card > 
                <Card.Image
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                />
                <Card.Body>{pokemon.name}</Card.Body>
            </Card>
        </>
        
    )
}

PokemonPage.getLayout = function getLayout(page: any){
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