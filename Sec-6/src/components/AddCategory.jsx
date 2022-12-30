import { useState } from 'react';

export const AddCategory = ({ setCategories,onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue( event.target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 0)
            return;

        onNewCategory( inputValue.trim() );
        //! setCategories( (categories) => [inputValue, ...categories]);
        setInputValue('');
    }


    return (
        // <form onSubmit={ (event) => onSubmit(event)}>
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar gifs" 
                value={ inputValue }
                onChange={ (e) => {onInputChange(e)} }
            />
        </form>
    )
}
