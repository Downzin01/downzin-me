import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import { AnimatePresence, motion } from 'framer-motion';

import App from './App';
import HomePage from './Routes/HomePage';
import ProjetosPage from './Routes/ProjetosPage';
import ErroPage from './Routes/ErroPage';

// Define a transição de página para a direita
const pageTransitionRight = {
    initial: { opacity: 0, x: "-10%" },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "-10%" }
};

// Define a transição de página para a esquerda
const pageTransitionLeft = {
    initial: { opacity: 0, x: "10%" },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "10%" }
};

// Cria o roteador
const router = createBrowserRouter ([
    {
        path: '/',
        element: (
            // Elemento raiz para a página inicial com transição de entrada/saída de opacidade
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 10 }} exit={{ opacity: 0 }}>
                <App />
            </motion.div>
        ),
        errorElement: (
            // Elemento para a página de erro 404 com transição de entrada/saída de opacidade
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 10 }} exit={{ opacity: 0 }}>
                <ErroPage />
            </motion.div>
        ),
        children: [
            {
                path: '/',
                element: (
                    // Elemento para a página Home com transição de entrada/saída de opacidade
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 10 }} exit={{ opacity: 0 }}>
                        <HomePage />
                    </motion.div>
                )
            },
            {
                path: '/projetos',
                element: (          
                    // Elemento para a página de Projetos com transição para a direita
                    <motion.div key="projetos" {...pageTransitionRight}>
                        <ProjetosPage />
                    </motion.div>    
                )
            },
            {
                path: '/sobre',
                element: (
                    // Elemento para a página de Sobre com transição para a esquerda
                    <motion.div key="projetos" {...pageTransitionLeft}>
                        <ProjetosPage />
                    </motion.div>
                )
            }
        ]
    },
    // Manipulador de erro para erro 404
    {
        path: '*',
        element: (
            // Elemento para a página de erro 404 com transição de entrada/saída de opacidade
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 10 }} exit={{ opacity: 0 }}>
                <ErroPage />
            </motion.div>
        )
    }
]);

// Cria o root para renderização da aplicação
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // Renderiza a aplicação dentro de um contexto de animação
    <React.StrictMode>
        <AnimatePresence>
            <RouterProvider router={router} />
        </AnimatePresence>
    </React.StrictMode>
);
