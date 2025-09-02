import { Col } from "react-grid-system"
import { Card } from "../../../../componentes/Card/Card"
import { Tipografia } from "../../../../componentes/Tipografia/Tipografia"
import styled from "@emotion/styled"

const ConteudoEstilizado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    color: ${props => props.theme.cores.primarias.c};
`
const CardFreela = ({ icone, texto }) => {
    return (
        <Col sm={6} md={6} lg={3} style={{ marginBottom: '24px' }}>
            <Card comBorda={false} variante="secundario">
                <ConteudoEstilizado>
                    {icone}
                    <Tipografia componente="body" variante="body">
                        {texto}
                    </Tipografia>
                </ConteudoEstilizado>
            </Card>
        </Col>
    )
}

export default CardFreela