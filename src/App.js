// Components
import NavBarComponent from './components/NavBarComponent';
import PuchaseComponent from './components/PuchaseComponent';
import RelatedProductsComponent from './containers/RelatedProductsContainer';

function App() {
  return (
    <>
      <NavBarComponent />
      <main>
        <PuchaseComponent />
        <RelatedProductsComponent />
      </main>
    </>
  );
}

export default App;
