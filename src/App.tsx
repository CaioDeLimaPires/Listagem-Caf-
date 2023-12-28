import BackgroundDefault from '@ui/atoms/BackgroundDefault';
import CoffeePresentationBlockWithButtons from './components/pages/InitialPage/components/organisms/CoffeePresentationBlockWithButtons';
import CardCoffe, {
  CoffeDetailsProps
} from './components/pages/InitialPage/components/organisms/CardCoffe';

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

function App() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,200&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,500&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,700&display=swap"
        rel="stylesheet"
      />
      <img
        style={{ width: '100%', height: '250px', top: 0, position: 'absolute' }}
        src="/bg-cafe.jpg"
      ></img>
      <div style={{ padding: '135px' }}>
        <BackgroundDefault>
          <CoffeePresentationBlockWithButtons />
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              columnGap: '24px',
              rowGap:"64px",
              alignItems: 'center',
              width: '100%',
              justifyContent: 'center'
            }}
          >
            <CardCoffe data={coffeeDetailsArray} />
          </div>
        </BackgroundDefault>
      </div>
    </div>
  );
}

export default App;
