import { Header } from "./components/Header/Header";
import { GlobalStyle } from './styles/GlobalStyles';
import { ProductsList } from "./components/ProductsList/ProductsList";

function App() {
  return (
    <>
      <Header />

      <ProductsList />

      <GlobalStyle/>
    </>
  );
}

export default App;
