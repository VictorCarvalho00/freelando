import { createBrowserRouter } from "react-router-dom";
import SelecaoCliente from "../Paginas/cadastro/SelecaoCliente";
import LayoutBaseCadastro from "../Paginas/LayoutBaseCadastro";
import LayoutBase from "../Paginas/LayoutBase";
import Interesses from "../Paginas/cadastro/Interesses";
import DadosPessoas from "../Paginas/cadastro/DadosPessoais";
import Concluido from "../Paginas/cadastro/Concluido";
import PaginaInicial from "../Paginas/PaginaInicial/PaginaInicial";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutBase />,
        children: [
            {
                path: "",
                element: <PaginaInicial />
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