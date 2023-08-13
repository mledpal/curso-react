import { useState } from "react";
import { AddCategory, GiftGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onNewCategory = (nuevaCategoria) => {

        if (!categories.includes(nuevaCategoria)) {
            setCategories([nuevaCategoria, ...categories]);
        } else {
            console.log('Ya existe');
        }

    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={onNewCategory} />

            {categories.map(category => (
                <GiftGrid
                    key={category}
                    category={category}
                />
            ))}
        </>
    )

}