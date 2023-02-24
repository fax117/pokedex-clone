import { Contrail_One } from '@next/font/google';
import styles from '../styles/Searchbar.module.css';
import {Row, Col, Input, Card, Text} from "@nextui-org/react";

function Searchbar (){
    return(
        <div className={styles.search_container}>
            <Row>
                <Col>
                    <Text h3 color="white">Nombre o número</Text>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Input clearable bordered theme="light"/>
                </Col>
                <Col>
                    <Card> 
                        <Card.Body className={styles.search_banner}>
                            <Text h3 color="white">
                                Busca un Pokémon por su nombre o usando su número de la Pokédex Nacional.
                            </Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Text color="white" size={15}>¡Usa la búsqueda avanzada para encontrar Pokémon por su tipo, debilidad, habilidad y demás datos!</Text>
                </Col>
            </Row> 
        </div> 
    )
}

export default Searchbar