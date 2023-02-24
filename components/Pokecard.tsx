import { Card } from "@nextui-org/react"
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Pokecard ({id, name}: {id:number, name: string}){
    return(
        <Card 
            className={styles.card} 
            isHoverable
            key={id}>
                <Link href={`/Pokemon/${id}`}>
                <Card.Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                alt={name}
                width="200"
                height="200"
                className={styles.poke_image}
                />
                <Card.Body>
                    <p className={styles.p_id}>{id}</p>
                    <p className={styles.h5_name}>{name}</p>
                </Card.Body>
                </Link>
        </Card>
    )
}

export default Pokecard