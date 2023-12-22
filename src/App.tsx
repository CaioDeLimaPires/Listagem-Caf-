import BackgroundCofe from '@layout/atoms/BackgroundCofe';
import '../src/styles/app.css';
import BackgroundDefault from '@ui/atoms/BackgroundDefault';
import CoffeePresentationBlockWithButtons from './components/pages/InitialPage/components/organisms/CoffeePresentationBlockWithButtons';

function App() {
  return (
    <div className="app">
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
      <BackgroundCofe>
        <BackgroundDefault>
          <CoffeePresentationBlockWithButtons/>
        </BackgroundDefault>
      </BackgroundCofe>
    </div>
  );
}

export default App;
