import Colaborador from '../Colaborador/Colaborador.js'
import './Time.css'

const Time = (props)=> {
    return(

            props.colaboradores.length > 0 && <section className='times' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor:props.corPrimaria}}>
                {props.nome}
            </h3>
            <div className='cards--times'>
            {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} key={colaborador.nome} corPrimaria={props.corPrimaria}></Colaborador>)}
            {/* <Colaborador corPrimaria={props.corPrimaria}></Colaborador>
            <Colaborador corPrimaria={props.corPrimaria}></Colaborador> */}

            </div>
        </section>

    )
}

export default Time