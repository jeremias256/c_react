import { heroes } from "../data/heroes";

export const getHeroById = (id) => {
	console.log("SE LLAMO A  => getHeroById");
	return heroes.find((hero) => hero.id === id);
};
