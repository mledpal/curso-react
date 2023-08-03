import { useState } from "react";
import { AddCategory} from "./components/AddCategory";
import { GiftGrid } from "./components/GifGrid";


export const GifExpertApp = () => { 

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = ( nuevaCategoria ) => {
        //setCategories( ( cat ) => [...cat, 'Call Of Duty'] );
  
        if(!categories.includes(nuevaCategoria)){
            setCategories( [nuevaCategoria, ...categories] );
        } else {
            console.log('Ya existe');
        }
        
    };

    return (
        <>
            
            <h1>GifExpertApp</h1>

            <AddCategory onAddCategory = { onAddCategory }/>
            
            { categories.map( category => ( 
                <GiftGrid 
                    key={ category } 
                    category={ category } 
                /> 
            ))}
        </>
    )

}