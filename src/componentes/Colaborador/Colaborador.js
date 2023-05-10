import {AiFillCloseCircle} from 'react-icons/ai'
import './Colaborador.css'
const Colaborador = (props)=>{
    return(
    
        <div className="colaborador--card">
            <AiFillCloseCircle className='fechar--icon' size={15}></AiFillCloseCircle>
            <div className='cabecalho--card' style={{backgroundColor: props.corPrimaria}}>
            <img className="foto--card" src={props.imagem} alt={props.nome}></img>
            </div>
            <div className='textos--card'>
            <h1 className='nome--card'>{props.nome}</h1>
            <p className='cargo--card'>{props.cargo}</p>
            </div>
           
        </div>
    )
}

export default Colaborador