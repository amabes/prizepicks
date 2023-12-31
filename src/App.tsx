import PokeGrid from './features/PokeGrid';
import TopNav from './features/TopNav';
import SearchBar from './features/SearchBar';
import Footer from './features/Footer';
import SearchResults from './features/SearchResults';
import SearchHistory from './features/SearchHistory';
import './styles/reset.css';
import './styles/colors.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopNav />
      <div className='AppContent'>
        <SearchBar />
        <SearchResults />
        <SearchHistory />
        <PokeGrid />
        <Footer />
      </div>
    </div>
  );
}

export default App;
