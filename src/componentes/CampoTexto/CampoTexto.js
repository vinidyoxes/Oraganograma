import './CampoTexto.css'


const CampoTexto = (props)=>{
    // console.log(props)

    const aoDigitado = (evento)=>{
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="inputCadastro">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio}placeholder={props.placeholder}></input>
        </div>
    )

}

export default CampoTexto
