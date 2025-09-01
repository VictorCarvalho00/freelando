import GrupoRadio from "../../componentes/Radio/GrupoRadio"
import { Tipografia } from "../../componentes/Tipografia/Tipografia"
import { Col, Row } from "react-grid-system"
import { Botao } from "../../componentes/Botao/Botao"
import { Link, useNavigate } from "react-router-dom"
import { useCadastroUsuarioContext } from "../../contexto/CadastroUsuario"
import { useEffect } from "react"

const opcoes = [
    {
        valor: 1,
        label: 'TI e Programação',
    },
    {
        valor: 2,
        label: 'Desing e Multimídia',
    },
    {
        valor: 3,
        label: 'Revisão',
    },
    {
        valor: 4,
        label: 'Tradução',
    },
    {
        valor: 5,
        label: 'Transcrição',
    },
    {
        valor: 6,
        label: 'Marketing',
    },
]

const Interesses = () => {
    const { usuario, setInteresse, possoSelecionarInteresse } = useCadastroUsuarioContext()

    const navegar = useNavigate()

        useEffect(() => {
        if(!possoSelecionarInteresse()){
            navegar('/cadastro')
            
        }
        
}, [navegar, possoSelecionarInteresse])

    return (
        <div>
            <Tipografia variante="h1" componente="h1">
                Crie seu cadastro
            </Tipografia>
            <Tipografia variante="h3" componente="h3">
                Qual a área de interesse?
            </Tipografia>
            <GrupoRadio opcoes={opcoes} valor={usuario.interesse} onchange={setInteresse} />
            <Row>
                <Col lg={6} md={6} sm={6}>
                    <Link to='/cadastro'>
                        <Botao variante='secundaria'>
                            Anterior
                        </Botao>
                    </Link>
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <div style={{ textAlign: 'right' }}>
                        <Link to='/cadastro/dados-pessoais'>
                            <Botao>
                                Próxima
                            </Botao>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Interesses