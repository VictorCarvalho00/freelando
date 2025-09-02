import { RouterProvider } from "react-router-dom"
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema"
import Estilos from "./componentes/EstilosGlobais/Estilos"
import { router } from "./Router/Router"

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <RouterProvider router={router} />
    </ProvedorTema>
  )
}
 
export default App
