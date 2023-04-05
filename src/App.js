import { useState } from 'react';
import { Banner } from './components/Banner/Banner';
import { Formulario } from './components/Formulario';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores);
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionador(colaborador)}/>
    </div>
  );
}

export default App;
