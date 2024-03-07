import React from 'react';
import './App.css';

function App() {
  return (
    <main>
      <div className="container">
        <img id="computador" src="computador.png" alt="fotoComputador" />
        <div className="inner-container">
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" />
          </div>
          <div className="form-field">
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" name="senha" />
            <div className="botao-enviar">
              <input className="enviar" type="submit" value="Enviar" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;