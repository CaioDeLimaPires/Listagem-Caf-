import BackgroundDefault from '@ui/atoms/BackgroundDefault';
import TableCoffe from '@pages/initialPage/organismsTableCoffe';
import CoffeePresentationBlockWithButtons from '@pages/initialPage/organismsCoffeePresentationBlockWithButtons';
import '../src/styles/app.css';

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
      <img className="imageBackgrround" src="/bg-cafe.jpg"></img>
      <div style={{ padding: '135px' }}>
        <BackgroundDefault>
          <CoffeePresentationBlockWithButtons />
          <TableCoffe />
        </BackgroundDefault>
      </div>
    </div>
  );
}

export default App;
