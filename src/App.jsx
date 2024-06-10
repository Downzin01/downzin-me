import './styles/EstilosGlobais.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
// Importa o componente Outlet do react-router-dom, que renderiza o conteúdo da rota pai
import { Outlet } from 'react-router-dom';

// Declara o componente App como uma função de componente
export default function App() {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}
