import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {

    const [nome,setNome] = useState('');
    const [nick,setNick] = useState('');
    const [funcao,setFuncao] = useState('');
    const [imagem,setImagem] = useState('');
    const [jogo,setJogo] = useState('');

    console.log("Times recebidos no Formulario:", props.times);

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            nick,
            funcao,
            imagem,
            jogo
        });
    }

    return (
        <section className="formulario">
            <h2>PREENCHA OS DADOS PARA GERAR OS DADOS DO JOGADOR...</h2>
            <form onSubmit={aoSalvar}>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome..." required value={nome} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label="Nick" placeholder="Digite seu nick..." required value={nick} aoAlterado={valor => setNick(valor)}/>
                <ListaSuspensa obrigatorio={true} label ="Jogo" itens={props.jogos} required value={jogo} aoAlterado={valor => setJogo(valor)}/>
                <CampoTexto obrigatorio={true} label="Funcao" placeholder="Digite sua funcao..." required value={funcao} aoAlterado={valor => setFuncao(valor)}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereco da imagem..." required value={imagem} aoAlterado={valor => setImagem(valor)}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;