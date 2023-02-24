import { Card, Grid } from "@nextui-org/react"
import styles from '../styles/Pokecard.module.css'
import Link from 'next/link'

function Pokecard ({id, name}: {id:number, name: string}){

    return(
        <Grid>
            <Card 
            variant="flat"
            className={styles.poke_card} 
            isHoverable
            key={id}>
                <Link href={`/Pokemon/${id}`}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                    alt={name}
                    className={styles.poke_image} />
                <Card.Body className={styles.card_body}>
                    <p className={styles.p_id}>N.° {id}</p>
                    <h5 className={styles.h5_name}>{name}</h5>
                </Card.Body>
                </Link>
            </Card>
        </Grid>
    )
}

export default Pokecard