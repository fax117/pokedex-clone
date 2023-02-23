import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { GetStaticProps, NextPage } from 'next'
import { GetPokedexResults, GetPokemonResults, PokemonEntry } from '@/types'
import imageLoader from '@/imageLoader'

const inter = Inter({ subsets: ['latin'] })


const Home: NextPage<{ pokemons: PokemonEntry[] }> = ({ pokemons }) =>{
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokédex | Temporaldomain.com</title>
        <meta name="description" content="Next.JS App created by Fabricio Fuentes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        {pokemons.map((pokemon)=>{
          return (
            <div key={pokemon.entry_number}>
              <Link href={`/Pokemon/${pokemon.entry_number}`}>
              
              <Image
              loader={imageLoader}
              unoptimized
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.entry_number}.png`}
              alt={pokemon.pokemon_species.name}
              width="200"
              height="200"
              />
                <p>N.° {pokemon.entry_number}</p>

                <p >{pokemon.pokemon_species.name}</p>
                </Link>
            </div>
            )
        })}
      </>
      
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
