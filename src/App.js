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

  const [jogadores, setJogadores] = useState([]);

  const aoNovoJogadorAdicionado = (jogador) => {
    const jogadorFormatado = {
        ...jogador,
        nome: `${jogador.nome} '${jogador.nick}'`
    };
    setJogadores([...jogadores, jogadorFormatado]);
    console.log(jogadores);
  }

  function deletarJogador() {
    console.log('Deletar jogador');
  }

  return (
    <div className="App">
        <Banner />
        <Formulario jogos={jogos.map(jogo => jogo.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador)} />
        <div className="jogos">

        {jogos.map(jogo =>
          <Jogo
            key={jogo.nome}
            nome={jogo.nome}
            cor={jogo.cor}
            jogadores={jogadores.filter(jogador => jogador.jogo === jogo.nome)}
            aoDeletar={deletarJogador}
          />
        )}

        </div>
    </div>
  );
}

export default App;
