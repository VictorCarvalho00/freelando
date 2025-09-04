import { Col, Container, Row } from "react-grid-system"
import LayoutBase from "../LayoutBase"
import { Card } from "../../componentes/Card/Card"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import { Link } from "react-router-dom"
import { Botao } from "../../componentes/Botao/Botao"

import erro404 from './assets/erro-404.png'
import styled from "@emotion/styled"

const ImagemEstilizada = styled.img`
    max-width: 100%;
`

const Pagina404 = () => {
    return (
        <LayoutBase>
            <Container>
                <Row justify="center">
                    <Col xxx={6} xxl={6} xl={6} lg={6} md={8} sm={12} style={{ marginTop: '48px' }}>
                        <Card>
                            <Tipografia variante="h1" componente="h1">
                                Ops... Página não encontrada :(
                            </Tipografia>
                            <figute>
                                <ImagemEstilizada src={erro404} />
                            </figute>
                            <Tipografia componente="body" variante="body">
                                Não encontramos a página que você está buscando, mas temos muitas outras para você navegar!
                            </Tipografia>
                            <div style={{ textAlign: 'center' }}>
                                <Link to="/">
                                    <Botao variante="secundaria">
                                        Voltar para a home
                                    </Botao>
                                </Link>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </LayoutBase>
    )
}

export default Pagina404