import { Col, Container } from "react-grid-system"
import Banner from "./Banner/Banner"
import Bloco from "./Bloco"
import { cardsClientes, cardsFreelas, habilidades } from "./Dados"
import CardCliente from "./Vantagens/cards/CardCliente"
import CardFreela from "./Vantagens/cards/CardFreela"
import Chip from "../../componentes/Chip/Chip"

const PaginaInicial = () => {
    return (
        <>
            <Banner />
            <Container>
                <Bloco cards={cardsClientes} titulo="Vantagens para contratantes">
                    {cardsClientes.map(card => <CardCliente
                        key={card.texto}
                        icone={card.icone}
                        texto={card.texto} />)}
                </Bloco>
                <Bloco cards={cardsFreelas} titulo="Vantagens para contratantes">
                    {cardsClientes.map(card => <CardFreela
                        key={card.texto}
                        icone={card.icone}
                        texto={card.texto} />)}
                </Bloco>
                <Bloco cards={cardsFreelas} titulo="Quais habilidades você encontra por aqui?">
                    <Col sm={12}>
                        {habilidades.map(habilidades =>
                            <Chip key={habilidades}> {habilidades} </Chip>)}
                    </Col>
                </Bloco>
            </Container>
        </>
    )
}

export default PaginaInicial
