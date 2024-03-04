import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [ gifs, setGifs ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
  
    const getImages = async () => {
        const newGifs = await getGifs( category );
        setGifs(newGifs);
        setIsLoading(false);
    }

    useEffect( ()=> {
        getImages();
    }, [])

  //TODO op2 useEffect( () => {
  //TODO op2   getGifs(category)
  //TODO op2     .then( newGifs => setGifs(newGifs))
  //TODO op2 }, [] )

    return {
        gifs,
        isLoading
    }
}
