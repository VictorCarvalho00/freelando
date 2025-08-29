import { Col, Row } from "react-grid-system"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import { Link } from "../../componentes/Link/Link"

import { Link as RouterLink } from 'react-router-dom'

import cliente from './assets/cliente.png'
import freelance from './assets/freela.png'

const SelecaoCliente = () => {
    return (
        <div>
            <Tipografia variante="h1" componente="h1">
                Crie seu cadastro
            </Tipografia>
            <Tipografia variante="h3" componente="h3">
                Como podemos te ajudar?
            </Tipografia>
            <Row>
                <Col md={6} sm={12}>
                    <RouterLink to='interesses'>
                        <img src={cliente} alt="" />
                        <Tipografia variante="body" componente="body">
                            Sou cliente precisso de um freela!
                        </Tipografia>
                    </RouterLink>
                </Col>
                <Col md={6} sm={12}>
                    <img src={freelance} alt="" />
                    <Tipografia variante="body" componente="body">
                        Sou um freela e preciso de clientes!
                    </Tipografia>
                </Col>
            </Row>
            <div style={{ textAlign: "center" }}>
                <Tipografia variante="body2" componente="body2">
                    já tem conta?
                </Tipografia>
                <p>
                    <Link variante="secundaria">Faça login!</Link>
                </p>
            </div>
        </div>
    )
}

export default SelecaoCliente