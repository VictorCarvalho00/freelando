import { Col, Container, Row } from 'react-grid-system';
import './App.css';
import { CampoTexto } from './componentes/CampoTexto/CampoText';
import { Card } from './componentes/Card/Card';
import Estilos from './componentes/EstilosGlobais/Estilos';
import { ProvedorTema } from './componentes/ProvedorTema/ProvedorTema';
import { Tipografia } from './componentes/Tipografia/Tipografia';

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Container>
        <Row justify='center'>
          <Col lg={6} md={8} sm={12 }>
            <Card>
              <Tipografia variante="h1" componente="h1">
                Freelando
              </Tipografia>
              <Tipografia variante="body" componente="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
              </Tipografia>
              <CampoTexto titulo="Noem Completo" />
            </Card>
          </Col>
        </Row>
      </Container>
    </ProvedorTema>
  );
}

export default App;
