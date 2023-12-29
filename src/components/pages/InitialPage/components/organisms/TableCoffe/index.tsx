
import CardCoffe, { CoffeDetailsProps } from '@pages/initialPage/moleculesCardCoffe';
import './style.css';

const coffeeDetailsArray: CoffeDetailsProps[] = [
    {
      id: 1,
      name: 'Coffee A',
      image: 'coffee_a.jpg',
      price: '2.99',
      rating: 4.5,
      votes: 120,
      popular: true,
      available: true
    },
    {
      id: 2,
      name: 'Coffee B',
      image: 'coffee_b.jpg',
      price: '3.49',
      rating: 4.2,
      votes: 90,
      popular: false,
      available: true
    },
    {
      id: 3,
      name: 'Coffee C',
      image: 'coffee_c.jpg',
      price: '4.99',
      rating: 4.8,
      votes: 150,
      popular: true,
      available: false
    },
    {
      id: 4,
      name: 'Coffee D',
      image: 'coffee_d.jpg',
      price: '2.50',
      rating: 3.9,
      votes: 80,
      popular: false,
      available: true
    },
    {
      id: 5,
      name: 'Coffee E',
      image: 'coffee_e.jpg',
      price: '5.99',
      rating: 4.6,
      votes: 200,
      popular: true,
      available: true
    },
    {
      id: 6,
      name: 'Coffee F',
      image: 'coffee_f.jpg',
      price: '3.99',
      rating: 4.0,
      votes: 110,
      popular: true,
      available: true
    }
  ];

const TableCoffe = () => (
  <div className="containerTableCoffe">
    <CardCoffe data={coffeeDetailsArray} />
  </div>
);

export default TableCoffe;
