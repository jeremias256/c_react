
import { heroes } from '../data/heroes';

export const getHeroesByPushisher = ( {publisher} ) => {
    console.log("SE LLAMO A => getHeroesByPublisher");
    const validPublishers = [ 'DC Comics', 'Marvel Comics']
    if ( !validPublishers.includes( publisher )) {
        throw new Error(`${ publisher } is not a valid publisher`);
    }

    return heroes.filter( heroe => heroe.publisher === publisher );
}
