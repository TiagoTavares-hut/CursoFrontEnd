import "./App.css";

import { useState } from "react"
import ToDoForm from "./componentes/ToDoForm";
import ToDoList from "./componentes/ToDoList";

const App = () =>{
  //logica do componente
  const [tarefas, setTarefas] = useState([]);
  //estado para armazenar a lista de tarefas

  const addTarefa = (tarefa) =>{
    setTarefas([...tarefas, tarefa]);
    //adiciona a nova tarefa ao array de tarefas  
    // que ja esta adicionado anteriormente
  };

    const removerTarefa = (index) =>{
      setTarefas(tarefas.filter((_, i) => i !== index));
      //remove a tarefa do array de tarefas
      //(_, i) mantem o vetor original , com o novo indice
    };
  //view do componente
    return(
      <div>
        <h1>To-Do_List APP</h1>
        <ToDoFrom addTarefa={addTarefa}/>
        <ToDoList tarefas={tarefas} removerTarefa={removerTarefa}/>
      </div>
    );
};

export default App;
//componente principal do aplicativo
