import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return(
        <div className="lista-suspensa">
            <label> {props.label}</label>
            <select
                onChange={evento => props.aoAlterado(evento.target.value)}
                required={props.obrigatorio}
                value={props.valor}>
                <option value="">Selecione um jogo</option> {/* Adicione uma opção padrão */}
                {props.itens.map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </div>
    )
}

export default ListaSuspensa