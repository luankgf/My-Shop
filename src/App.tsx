import { Header } from "./components/Header/Header";
import { GlobalStyle } from './styles/GlobalStyles';
import { ProductsList } from "./components/ProductsList/ProductsList";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />

      <ProductsList />

      <GlobalStyle/>
    </Provider>
  );
}

export default App;
