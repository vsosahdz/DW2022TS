import React from "react";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      usuario:'',
      password:''
    }
    this.handleInput = this.handleInput.bind(this);
  }

  /*handleInput=(e)=>{

  }*/
  
  handleInput(e){
    const {value,name}=e.target
    this.setState({
      [name]:value
    })
  }

  render(){
    console.log(this.state)
    return(
      <div className="App">
        <div className="card">
            <div className="card-header">
              <p>Esto es una prueba</p>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <input type="text" onChange={this.handleInput} name="usuario" placeholder="Usuario"/>
                </div>
                <div className="form-group">
                  <input type="password" onChange={this.handleInput} name="password" placeholder="Usuario"/>
                </div>
                <button>Enviar</button>
              </form>
            </div>
        </div>
      </div>
    )
  }
}

export default App;
