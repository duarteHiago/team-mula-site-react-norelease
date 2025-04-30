import Jogador from '../Jogador';
import './Jogo.css';

const Jogo = (props) => {

    const estilo = { backgroundColor: props.cor };

    return (
        console.log('Jogo renderizado'),

        (props.jogadores.length > 0) ?<section className="jogo" style={estilo}>
            <h3>{props.nome}</h3>
            <div className="jogadores">
                {props.jogadores.map(jogador => <Jogador key={jogador.nome}nome={jogador.nome} funcao={jogador.funcao} imagem={jogador.imagem}/>)}
            </div>
        </section>

        :''
    )
}

export default Jogo;