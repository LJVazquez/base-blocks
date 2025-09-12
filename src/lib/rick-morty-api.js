import { query } from '@lib/query';

export const getCharacters = () => {
	return query(`/character`);
};
