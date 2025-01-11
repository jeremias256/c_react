import { useMemo } from 'react';
import { getHeroesByPushisher } from '../helpers';
import { HeroCard } from './HeroCard';

export const HeroList = (publisher) => {
    console.log("RENDERIZO => HeroList.jsx");
    const heroes = useMemo(() => getHeroesByPushisher(publisher), [publisher]);

    return (

        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map((heroe) => (
                    <HeroCard
                        key={heroe.id}
                        {...heroe}
                    />
                ))
            }
        </div>
    );
}
