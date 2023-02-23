import Head from 'next/head'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { GetStaticProps, NextPage } from 'next'
import { GetPokedexResults, PokemonEntry } from '@/types'
import { Card } from "@nextui-org/react";

const inter = Inter({ subsets: ['latin'] })


const Home: NextPage<{ pokemons: PokemonEntry[] }> = ({ pokemons }) =>{

  return (
    <div className={styles.main}>
      <Head>
        <title>Pokédex | Temporaldomain.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Next.JS App created by Fabricio Fuentes" />
      </Head>
      <div className={styles.grid}>
        {pokemons.map((pokemon)=>{
            return (
            <>
              <Link href={`/Pokemon/${pokemon.entry_number}`}>
                <Card 
                className={styles.card} 
                isHoverable
                key={pokemon.entry_number}>
                  <Card.Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.entry_number}.png`}
                  alt={pokemon.pokemon_species.name}
                  width="200"
                  height="200"
                  className={styles.poke_image}
                  />
                  <Card.Body>
                    <p className={styles.p_id}>N.° {pokemon.entry_number}</p>
                    <p className={styles.h5_name}>{pokemon.pokemon_species.name}</p>
                  </Card.Body>
                </Card>
              </Link>
            </>
            )
        })}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  // Retreiving all pokemon from Pokeapi from the National Pokedex
  const rest = await fetch("https://pokeapi.co/api/v2/pokedex/1/")
  const {pokemon_entries}: GetPokedexResults = await rest.json();
  
  return{
    props: {
      pokemons: pokemon_entries,
    }
  }
}

export default Home
