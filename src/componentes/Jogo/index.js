import Jogador from '../Jogador';
import './Jogo.css';

const Jogo = (props) => {

    const estilo = { backgroundColor: props.cor };

    return (
        console.log('Jogo renderizado'),
        <section className="jogo" style={estilo}>
            <h3>{props.nome}</h3>
            <Jogador/>
        </section>
    )
}

export default Jogo;