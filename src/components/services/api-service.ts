// api.ts
import { CoffeDetailsProps } from '@pages/initialPage/moleculesCardCoffe';
import { useQuery, UseQueryResult } from 'react-query';


export const fetchCoffeeData = async (): Promise<CoffeDetailsProps[]> => {
  const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');

  if (!response.ok) {
    throw new Error('Erro ao buscar os dados');
  }

  return response.json();
};

export const useCoffeeData = (): UseQueryResult<CoffeDetailsProps[], Error> => {
  return useQuery('coffeeData', fetchCoffeeData);
};
