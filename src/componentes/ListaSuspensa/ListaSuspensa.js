import './ListaSuspensa.css'

const ListaSuspensa = (props)=>{
    // console.log(props)
    return (
        <section>
        <label>{props.label}</label>
        <select onChange={function(event) {props.aoAlterado(event.target.value)}} className="select-cargo" required={props.obrigatorio} value={props.valor}>
        <option value={''}></option>
        {
            props.options.map((cargoAtual)=>{
                return(<option key={cargoAtual}>{cargoAtual}</option>)

            })
        }
        
        </select>
        </section>
    )
}

export default ListaSuspensa