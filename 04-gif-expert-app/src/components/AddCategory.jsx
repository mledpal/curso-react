import { useState } from 'react';

export const AddCategory = ( { onAddCategory } ) => { 

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( { target } ) => {        
        setInputValue( target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const newCategory = inputValue.trim();

        if( newCategory.length <= 1 ) return;

        onAddCategory( newCategory );
        setInputValue('');
    };

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder ="Buscar GIFs"
                value = { inputValue }
                onChange = { onInputChange }
            />
        </form>
    )    
}