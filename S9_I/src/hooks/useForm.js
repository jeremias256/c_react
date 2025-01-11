import { useState } from 'react';

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState({ initialForm });
    // username: '',
    // email: '',
    // password: ''
    // })
    //! Comentamos estas claves ya que el hook sera genérico
    //! muy especifico no es necesario aquí const { username, email, password } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
