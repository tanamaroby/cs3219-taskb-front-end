import React from 'react';
import './Personas.css'

const Persona = ({persona, remove}) => {

    return(
        <div className="card">
            <div className="card-body">
                <div className="name">
                    <h5 class="card-title">{persona.name}</h5>
                    <button onClick={() => {
                        remove(persona); 
                        console.log("deleted");
                    }} className="btn btn-danger">Delete</button>
                </div>
                <h6 className="card-subtitle mb-2 text-muted">{persona.gender}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{persona.arcana}</h6>
                <p className="card-text">{persona.origin}</p>
            </div>
        </div>
    );
}

export default Persona;