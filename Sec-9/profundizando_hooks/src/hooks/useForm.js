import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
    
    const [ formState, setFormState ] = useState({ initialForm });
        // username: '',
        // email: '',
        // password: ''
    // })

    const onInputChange = ( {target} ) => {

        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ] : value
        })
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    //! muy especifico no es necesario aqui const { username, email, password } = formState;

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
  }
}
