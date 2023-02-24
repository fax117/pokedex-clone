import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { GetStaticProps, NextPage } from 'next'
import { GetPokemonResults, Result } from '@/types/types'
import Pokecard from '@/components/Pokecard'
import Searchbar from '@/components/Searchbar'
import {Container, Button, Text, Grid} from "@nextui-org/react";
import InfiniteScroll from 'react-infinite-scroll-component'
import { useState } from 'react'
import Link from 'next/link'

const Home: NextPage<{ pokemons: Result[], nextQuery: string }> = ({ pokemons, nextQuery }) =>{

  const [pokemen, setPokemons] = useState(pokemons);
  const [newQuery, setNextQuery] = useState(nextQuery);
  const [hasMore, setHasMore] = useState(false);

  const pressButton = () => {
    getMorePokemons
    setHasMore(true)
  }

  const getMorePokemons = async () => {
    const res = await fetch(`${newQuery}`);
    const {results, next}: GetPokemonResults = await res.json();
    setPokemons((newResult) => [...newResult, ...results]);
    setNextQuery(next)
  };

  // Get ID from URL because the API does not provide the id
  function getPokeId(pokemon: Result): number {
    const pokeIdString = pokemon.url.slice(34, -1)
    const pokeId: number = +pokeIdString
    return pokeId
  } 

  return (
    <div className={styles.main}>
      <Head>
        <title>Pokédex | ffuentes.me</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Next.JS App created by Fabricio Fuentes" />
      </Head>

      <Container className={styles.content_container}>
        <nav className={styles.nav_container}>
          <Link href="/">
            <h1 className={styles.nav_h1}>Pokédex</h1>
          </Link>
        </nav>
        
        <Grid.Container justify="center">
          <InfiniteScroll
            dataLength={pokemen.length}
            next={getMorePokemons}
            hasMore={hasMore}
            loader={<h3> Loading...</h3>}
          > 
            {pokemen.map((pokemon: Result)=>{
              return (
                  <Pokecard 
                    key={getPokeId(pokemon)}
                    id={getPokeId(pokemon)}
                    name={pokemon.name} />
              )
            })}
          </InfiniteScroll>
        </Grid.Container>

        <Button 
          className={styles.load_button}
          onPress={pressButton}>
          <Text color="white">Cargar más Pokémon</Text>
        </Button>

      </Container>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  // Retreiving all pokemon from Pokeapi from the National Pokedex
  const rest = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12")
  const {results, next}: GetPokemonResults = await rest.json();
  
  return{
    props: {
      pokemons: results,
      nextQuery: next,
    }
  }
}

export default Home
