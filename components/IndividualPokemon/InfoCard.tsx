import { Card, Row, Col, Text } from "@nextui-org/react";

function InfoCard ({height, weight, sex}: {height:number, weight: number, sex:string}){
    return(
        <Card>
            <Card.Body>
                <Row>
                    <Col>
                        <Text>Altura</Text>
                    </Col>
                    <Col>
                        <Text>Categoría</Text>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Text>{height}</Text>
                    </Col>
                    <Col>
                        <Text>Algo debería de ir aquí</Text>
                    </Col>
                </Row>
                <Card.Divider />
                <Row>
                    <Col>
                        <Text>Peso</Text>
                    </Col>
                    <Col>
                        <Text>Habilidad</Text>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Text>{weight}</Text>
                    </Col>
                    <Col>
                        <Text>Algo debería de ir aquí</Text>
                    </Col>
                </Row>
                <Card.Divider />
                <Row>
                    <Col>
                        <Text>Sexo</Text>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Text>{sex}</Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default InfoCard