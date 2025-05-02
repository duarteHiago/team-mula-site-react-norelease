import './Jogador.css';
import { IoMdCloseCircle } from "react-icons/io";


const Jogador = ({nome,funcao,imagem,nick,aoDeletar}) => {
    return(
            <div className="jogador">
                <IoMdCloseCircle size={25} className="deletar" onClick={aoDeletar}/>
                <div className='cabecalho'>
                    <img src={imagem} alt={nome} className="imagem-jogador"/>
                </div>
                <div className='rodape'>
                    <h4 className="nome-jogador">{nome}</h4>
                    <h5 className="posicao-jogador">{funcao}</h5>
                </div>
            </div>
    )
}

export default Jogador;