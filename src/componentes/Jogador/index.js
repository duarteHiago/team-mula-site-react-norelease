import './Jogador.css';

const Jogador = ({nome,funcao,imagem,nick}) => {
    return(
        <div className="jogador">
            <div className='cabecalho'>
                <img src={imagem} alt={nome} className="imagem-jogador"/>
            </div>
            <div className='rodape'>
                <h4 className="nome-jogador">{nome}</h4>
                <h5 className="nick-jogador">{nick}</h5>
                <h5 className="posicao-jogador">{funcao}</h5>
            </div>

        </div>
    )
}

export default Jogador;