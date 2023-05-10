import './App.css';
import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario/Formulario.js';
import { useState } from "react";
import Time from './componentes/Time/Time.js';
import Rodape from './componentes/Rodape/Rodape';





function App() {

  const times = [
    {
      nome: 'Programador',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Frontend',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'DevOps',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]


  const [colaboradores, setColaboradores] = useState([])

  const adicionandoNovoColaborador = (colaborador)=> {
    setColaboradores([...colaboradores,colaborador])
    debugger
  }
  return (
    <div className="App">
      <header className="App-header">
        <Banner></Banner>
        <Formulario times={times.map(time=>time.nome)} aoColaboradorCadastrado={(colaborador)=> {adicionandoNovoColaborador(colaborador)}} ></Formulario>
     
       {times.map((time) => {

        return(
          <Time 
          key={time.nome}
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria}
          colaboradores ={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          ></Time>

        )

        })}

      
      </header>
      <Rodape></Rodape>
    </div>
  );
}

export default App;
