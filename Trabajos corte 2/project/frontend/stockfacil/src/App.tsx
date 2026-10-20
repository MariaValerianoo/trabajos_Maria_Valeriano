import { Encabezado } from './components/encabezado';
/** Componente raiz: define la estructura general de la aplicacion */

function App() {
  return (
    <>
      <Encabezado titulo="Stock Facil" subtitulo="Sistema de gestion de stock" />
      <footer className="pie">
        Stockfacil . Proyecto del curso Full Stack (React + Express + MongoDB)
      </footer>
    </>
  );
}

export default App;