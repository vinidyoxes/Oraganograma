import { useState } from "react";
import Botao from "../Botao/Botao.js";
import CampoTexto from "../CampoTexto/CampoTexto.js"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa.js"

import './Formulario.css'



  
  
  
  
  const Formulario =(props) => {
      const [nome, setNome]= useState('')
      const [cargo, setCargo]= useState('')
      const [imagem, setImagem]= useState('')
      const [time, setTime]= useState('')
      const aoSalvar = (element)=>{
          element.preventDefault();
          props.aoColaboradorCadastrado({
            nome: nome,
            cargo:cargo ,
            imagem:imagem ,
            time:time
          })
          console.log("Card foi salvo" , nome, cargo,imagem,time)
          setNome('')
          setCargo('')
          setImagem('')
          setTime('')
        }
      return (
            
        <section className="secaoFormulario">
            <form className="secaoFormulario--formulario" onSubmit={aoSalvar}>
              
                <legend>Preencha os dados para criar o card do colaborador.</legend>
                <CampoTexto 
                obrigatorio={true} 
                label="nome" 
                placeholder="Digite seu nome"
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                ></CampoTexto>
                < CampoTexto obrigatorio = {
                    true
                }
                label = "email"
                placeholder = "Digite seu Email" 
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
                ></CampoTexto>

                <CampoTexto  label="imagem" placeholder="Selecione uma imagem"
                valor ={imagem}
                aoAlterado={valor => setImagem(valor)}

                ></CampoTexto>

                <ListaSuspensa  obrigatorio={true} 
                label="Escolha o Cargo" 
                options = {props.times}
                valor={time}
                aoAlterado={(valor) => setTime(valor)}
                ></ListaSuspensa>
                <Botao texto="Criar Card">Criar Card</Botao>
            </form>

        </section>

          
    )

} 

export default Formulario

