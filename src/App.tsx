import BackgroundDefault from '@ui/atoms/BackgroundDefault';
import CoffeePresentationBlockWithButtons from './components/pages/InitialPage/components/organisms/CoffeePresentationBlockWithButtons';
import Card from '@ui/atoms/Card';

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
              gap: '24px',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'center'
            }}
          >
            <Card image="/capuccino.jpg" />
            <Card image="/capuccino.jpg" />
            <Card image="/capuccino.jpg" />
            <Card image="/capuccino.jpg" />
            <Card image="/capuccino.jpg" />
            <Card image="/capuccino.jpg" />
          </div>
        </BackgroundDefault>
      </div>
    </div>
  );
}

export default App;
