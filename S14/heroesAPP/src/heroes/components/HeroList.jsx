
import { getHeroesByPushisher } from '../helpers';
import { HeroCard } from './HeroCard';


export const HeroList = ( publisher ) => {
  
    const heroes = getHeroesByPushisher( publisher );
    console.log('🚀 - file: HeroList.jsx:7 - HeroList - heroes:', heroes);
    
    return (
    
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {
            heroes.map(( heroe ) => (
                <HeroCard 
                    key={heroe.id} 
                    {...heroe} 
                />
            ))
        }
        </div>
    );
}
