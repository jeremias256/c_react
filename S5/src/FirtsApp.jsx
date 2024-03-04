import React from 'react';
import PropTypes from 'prop-types';

const message = 'Isaac';
const array = [1,32,45,23,100];
const objetoX = {segNom: 'Jeremias', ape: 'Menacho'};

const getResult = (a, b) => {
    return (a + b);
}
//! const getResult = async (a, b) => {
//!     return (a + b);
//! }

export const FirtsApp = ( props ) => {
const { numero, title, name, subtitle } = props;

    //! Intentar colocar las funciones del componente afuera.
    
    return (
        <>    
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h2>{numero}</h2>

            <h2>{message}</h2>
            <h2>{JSON.stringify(objetoX)}</h2>
            <h3>{array}</h3>

            <h3>{getResult(5, 5) }</h3>
        </>    
    )
}

FirtsApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
}

FirtsApp.defaultProps = {
    title: 'No hay título',
    subtitle: 'No hay subtitle pero use el de default props'
}
