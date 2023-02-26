import { Pokemon } from "@/types/types";
import Head from 'next/head'
import { GetServerSideProps } from "next";
import Layout from "@/components/Layout";
import { Card, Container, Row, Col, Text, Image } from "@nextui-org/react";
import styles from "../../styles/Pokemon.module.css"
import InfoCard from "@/components/IndividualPokemon/InfoCard";

function PokemonPage({pokemon}: {
    pokemon: Pokemon
}){
    return (
        <></>
    )
}

PokemonPage.getLayout = function getLayout(page: any){
    return <Layout>{page}</Layout>
}

/*
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
}*/

export default PokemonPage;