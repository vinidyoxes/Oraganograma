import "./Botao.css"

const Botao = (props)=>{
    // console.log(props)
    return(
        <button className="button">
            {props.children}
        </button>
    )

}

export default Botao