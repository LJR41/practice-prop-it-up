import React,{useState} from 'react';

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props
    //   variable      function to update the variable  = default value
    const[ageActual, setAgeActual] =useState(age)

    const haveBirthday = ()=>{
        setAgeActual(ageActual + 1)

    }
    return(
        <div>
            <h1 style={{color:"red"}}>Instructor {firstName} {lastName}</h1>
            <p>Age:{ageActual}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={haveBirthday}>Happy Birthday</button>
        </div>
    );
}
export default PersonCard; 

// Pair Programming with Cohort.