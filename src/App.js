import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const element = (<h1>Hello, World !</h1>)

const element2 = React.createElement(
  'h1',
  null,
  'Hello, World !!!!'
);

const personnes = [ 
  {
    nom: 'Diallo',
    prenom: 'Mouctar',
    role: 'Etudaint'
  },
  {
    nom: 'Camara',
    prenom: 'Laby Damaro',
    role: 'Développeur'
  },
  {
    nom: 'Diallo',
    prenom: 'Mouctar',
    role: 'Etudaint'
  },
    {
      nom: 'Diallo',
      prenom: 'Mouctar',
      role: 'Etudaint'
    }
  
];

const [p, ...autres] = personnes;
let nom="Laby Damaro", prenom="Camara";
[nom, prenom] = [prenom, nom];

const styles = {color:'green', fontStyle: 'bold', textDecoration: 'line-through'};

class App extends Component {
  render() {
    return (
      <div className="App" style={{...styles, fontSize: '40px'}}>
        <span>Nom: {p.nom}</span><br />
        <span>Prénom: {p.prenom}</span><br />
      </div>
    );
  }
}

export default App;
