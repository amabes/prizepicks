import PokeGrid from './features/PokeGrid';
import TopNav from './features/TopNav';
import SearchBar from './features/SearchBar';
import Footer from './features/Footer';
import SearchResults from './features/SearchResults.tsx';
import './styles/reset.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopNav />
      <SearchBar />
      <SearchResults />
      <PokeGrid />
      <Footer />
    </div>
  );
}

export default App;
