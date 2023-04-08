import React from 'react'
import Pagina from '../Component/Pagina'
import { Button, Card, Col, Row } from 'react-bootstrap'

const objetos = () => {

    const carros = [
        { marca: 'chevrolet', modelo: 'Opala', ano: 1971, cor: 'azul', foto: 'https://i1.sndcdn.com/artworks-000654003985-x67i6t-t500x500.jpg' },
        { marca: 'ford', modelo: 'Ka', ano: 2012, cor: 'azul', foto: 'https://1.bp.blogspot.com/-4YZKc3H5k2w/XQGLhObxNsI/AAAAAAAAVHs/pRQfC-bXIqY0fhBXleNKbJAiSjD0n4dSACLcBGAs/s1600/Ford-Ka-100-anos-automatico%2B%25283%2529.jpg' },
        { marca: 'VW', modelo: 'Jetta', ano: 2020, cor: 'azul', foto: 'https://i.ytimg.com/vi/qnFGjWf8mzk/maxresdefault.jpg' },
        { marca: 'VW', modelo: 'Fusca', ano: 1992, cor: 'azul', foto: 'https://www.pastorecc.com.br/site/photos/cars/2241/bg_KbKC2NmEpcGtjRuVbnZ5.jpeg' },
        { marca: 'chevrolet', modelo: 'Camaro', ano: 2019, cor: 'azul', foto: 'https://cdn.motor1.com/images/mgl/Ar92L/s3/2019-chevrolet-camaro-ss.jpg' },
        { marca: 'chevrolet', modelo: 'Impala', ano: 1967, cor: 'azul', foto: 'https://i.pinimg.com/originals/f8/18/ea/f818eac8be028d79b2c02736d17d5764.jpg' },
    ]
    return (
        <>
            <Pagina titulo='Carros'>



                <Row md={3}>

                    {carros.map(item => (
                        <Col className='mt-5'>

                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.foto} style={{height: "200px", width: "100%"}} />
                                <Card.Body>
                                    <Card.Title>{item.marca} - {item.modelo}</Card.Title>
                                
                                        <p>Ano: <strong>{item.ano}</strong></p>
                                        <p>Cor: <strong>{item.cor}</strong></p>
                                      
                                    <Button variant="dark">Detalhes</Button>
                                </Card.Body>
                            </Card>

                        </Col>

                    ))}




                </Row>




            </Pagina>
        </>
    )
}

export default objetos