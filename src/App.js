import React, { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Jogo from './componentes/Jogo';


function App() {

  const jogos = [
    { nome: "Counter-Strike 2", cor: "#ffff" },
    { nome: "Dota 2", cor: "#ffff" },
    { nome: "Valorant", cor: "#ffff" },
    { nome: "Rocket League", cor: "#ffff" },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
    console.log(colaboradores);
  }

  return (
    <div className="App">
        <Banner />
        <Formulario jogos={jogos.map(jogo => jogo.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
        <div className="jogos">
        {jogos.map(jogo => <Jogo key={jogo.nome} nome={jogo.nome} cor={jogo.cor} />)}
        </div>
    </div>
  );
}

export default App;
