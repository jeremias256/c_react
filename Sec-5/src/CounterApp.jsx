import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ( props ) => {

    const { value } = props;
    const [ counter, setCounter ] = useState( value );

    // function sumar(event, newValue){
    //     console.log(newValue);
    // }
    const sumar = (event) => {
        // setCounter( counter +1 ); //TODO ambas válidas
        setCounter( (c)=> c+1 );     //TODO ambas válidas
    }
    const restar = (event) => { setCounter( (c)=> c-1 ); }
    const reset = (event) => { setCounter( (c)=> value ); }

    return(
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            {/* <button onClick={ () => {console.log('+1')} }> */}
            {/* <button onClick={ (event)=> sumar(event, 'hola') }> */}
            <button onClick={ sumar }>+1</button>
            <button onClick={ restar }>-1</button>
            <button onClick={ reset }>reset</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}