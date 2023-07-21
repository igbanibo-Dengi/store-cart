import './App.css';
import Banner from './components/Banner';
import Filters from './components/Filters';
import NavBar from './components/NavBar';
import NavWidget from './components/NavWidget';
import ProductListing from './components/ProductListing';

function App() {
  return (
    <>
      <NavWidget />
      <NavBar />
      <Banner />
      <Filters />
      <ProductListing />
    </>
  );
}

export default App;
