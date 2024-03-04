
import { useState } from 'react';
/* ------------------------------- COMPONENTES ------------------------------ */
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState( ['Broly'] );
  
  const onAddCategory = ( onNewCategory ) => {
    if( categories.includes(onNewCategory) )
      return;
    setCategories([onNewCategory, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={ value => onAddCategory(value) }
        //setCategories={ setCategories } 
      />

      { 
        categories.map( (category) => (
          <GifGrid 
            key={category} 
            category={category}
          />
        )) 
      }
    </>
  )
}

