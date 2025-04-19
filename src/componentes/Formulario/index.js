import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = () => {

    const Jogo = ['Selecione seu jogo...', 'Counter-Strike 2', 'Dota 2', 'Valorant', 'Rocket League'];
    const aoSalvar = (evento) => {    
        evento.preventDefault();
        console.log('Formulário salvo!');
    }
    return (
        <section className="formulario">
            <h2>PREENCHA OS DADOS PARA GERAR OS DADOS DO JOGADOR...</h2>
            <form onSubmit={aoSalvar}>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome..." required/>
                <CampoTexto obrigatorio={true} label="Nick" placeholder="Digite seu nick..." required/>
                <ListaSuspensa obrigatorio={true} label ="Jogo" itens={Jogo} required/>
                <CampoTexto obrigatorio={true} label="Funcao" placeholder="Digite sua funcao..." required/>
                <CampoTexto label="Imagem" placeholder="Digite o endereco da imagem..." required/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;