import './Jogador.css';

const Jogador = (props) => {
    return(
        <div className="jogador">
            <div className='cabecalho'>
                <img src='https://github.com/duarteHiago.png' alt="Jogador" className="imagem-jogador"/>
            </div>
            <div className='rodape'>
                <h4 className="nome-jogador">Hiago</h4>
                <h5 className="posicao-jogador">GOAT</h5>
            </div>

        </div>
    )
}

export default Jogador;