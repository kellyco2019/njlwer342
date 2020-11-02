import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {

  state = {
    input : "",
    
  }
  addTask = (task) => {  
  this.setState({task});  
}
  onKeyPress=(e) => {
    if(e.key === 'Enter'){
      this.addTask(this.state.input)
      this.setState({input: ""})
    }
}
  onChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }


  render() { 
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li> 
            {this.state.task && <li>{this.state.task}</li>}
          </ul>
           <form onSubmit={ e => e.preventDefault()}>
             <input type="text" id="new-task" 
             placeholder="Ingresa una tarea y oprime Enter" 
             onChange={this.onChange} 
             value={this.state.input}
             onKeyPress={this.onKeyPress}
             />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
