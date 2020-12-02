import React from 'react';
import {useHistory} from 'react-router-dom';


function Home(){

    let history = useHistory();

    function handleButton(){
        history.replace('/sobre');
    }

    return(
        <div>
            <h4>Página Home</h4>
            <button onClick={handleButton}>Ir para a página sobre</button>
        </div>
    );

}

export default Home;