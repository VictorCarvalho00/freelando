import { createBrowserRouter } from "react-router-dom";
import SelecaoCliente from "../Paginas/cadastro/SelecaoCliente";
import LayoutBaseCadastro from "../Paginas/LayoutBaseCadastro";
import LayoutBase from "../Paginas/LayoutBase";
import Interesses from "../Paginas/cadastro/Interesses";
import DadosPessoas from "../Paginas/cadastro/DadosPessoais";
import Concluido from "../Paginas/cadastro/Concluido";
import PaginaInicial from "../Paginas/PaginaInicial/PaginaInicial";
import Pagina404 from "../Paginas/Erros/Pagina404";
import Login from "../Paginas/Login/Login";
import Perfil from "../Paginas/Perfil/Perfil";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutBase />,
        ErrorBoundary: Pagina404,
        children: [
            {
                path: "",
                element: <PaginaInicial />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "area-logada",
                children: [
                    {
                        path: 'perfil',
                        element: <Perfil />
                    }
                ]
            },
            {
                path: 'cadastro',
                element: <LayoutBaseCadastro />,
                children: [
                    {
                        path: '',
                        element: <SelecaoCliente />
                    },
                    {
                        path: 'interesses',
                        element: <Interesses />
                    },
                    {
                        path: 'dados-pessoais',
                        element: <DadosPessoas />
                    },
                    {
                        path: 'concluido',
                        element: <Concluido />
                    }
                ]
            }
        ],
    },
]);