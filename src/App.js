import React, {useEffect, useState} from 'react';
import Persona from './Persona';
import './App.css';

const App = () => {
  const [personas, setPersonas] = useState([
    // {name: "Placeholder name 1", gender: "Placeholder gender 1", arcana: "Placeholder arcana 1", origin: "Placeholder origin 1"},
    // {name: "Placeholder name 2", gender: "Placeholder gender 2", arcana: "Placeholder arcana 2", origin: "Placeholder origin 2"},
    // {name: "Placeholder name 3", gender: "Placeholder gender 3", arcana: "Placeholder arcana 3", origin: "Placeholder origin 3"},
    // {name: "Placeholder name 4", gender: "Placeholder gender 4", arcana: "Placeholder arcana 4", origin: "Placeholder origin 4"},
  ]);

  useEffect(() => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = 'https://sg7cmab7q5.execute-api.us-east-1.amazonaws.com/dev/api/contacts';
    console.log('Fetching list of personas from the database');
    fetch(proxyUrl + apiUrl, {
      method: 'GET',
    })
    .then(res => res.json())
    .then((data) => {
      setPersonas(data.data);
    })
  }, [])

  function remove(persona) {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = 'https://sg7cmab7q5.execute-api.us-east-1.amazonaws.com/dev/api/contacts/';
    const id = persona._id;
    fetch(proxyUrl + apiUrl + id, {
      method: 'DELETE',
    })
    console.log("Persona deleted with the id: " + id);
    console.log("re-fetching information from the database");
    fetch(proxyUrl + apiUrl, {
      method: 'GET',
    })
    .then(res => res.json())
    .then((data) => {
      setPersonas(data.data);
    })
    window.location.reload(true);
  }

  return (
    <div className="whole">
      <div className="titlebox">
              <h1>Personas List</h1>
      </div>
      <div className="personas">
        {personas.map((person) => (
          <Persona persona={person} remove={remove}/>
        ))
        }
      </div>  
    </div>  
  )
}

export default App;
