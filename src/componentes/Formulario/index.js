import CampoTexto from '../CampoTexto';
import './Formulario.css';

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do jogador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu Nome" required/>
                <CampoTexto label="Nick" placeholder="Digite seu Nick" required/>
                <CampoTexto label="Jogo" placeholder="Digite seu Jogo" required/>
                <CampoTexto label="Funcao" placeholder="Digite sua Funcao" required/>
                <CampoTexto label="Imagem" placeholder="Digite o Endereco da Imagem" required/>

            </form>
        </section>
    )
}

export default Formulario;