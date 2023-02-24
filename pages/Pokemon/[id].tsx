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
        <div className={styles.main}>
            <Head>
                <title>{pokemon.name} | Pokédex</title>
                <meta name="description" content="Next.JS App created by Fabricio Fuentes" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container>
                <Row justify="center">
                    <Col>
                        <Text h2>{pokemon.name + " N.° " + pokemon.id}</Text>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image 
                            className={styles.image_bg}
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                            alt={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}/>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Text>Aquí habría una descripción, ¡SI TUVIERA UNA!</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Text>Versiones: </Text>
                            </Col>
                            <Col>
                                <Text>Icono</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <InfoCard 
                                    height={pokemon.height}
                                    weight={pokemon.weight}
                                    sex={pokemon.species.name}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Text h4>Tipo</Text>
                            </Col>
                            <Col>
                                <Text>
                                    {pokemon.types.map((ty) => {
                                        return(
                                            <>
                                                <Text>{ty.type.name}</Text>
                                            </>
                                        )
                                    })}
                                </Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Text h4>
                                    XP Base
                                </Text>
                            </Col>
                            <Col>
                                <Text>{pokemon.base_experience}</Text>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {pokemon.stats.map((stat) => {
                            return (
                                <>
                                    <Text>{stat.stat.name + " " + stat.base_stat}</Text>
                                </>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </div>
        
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