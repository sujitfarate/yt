
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Appcontext from './context/contextApi';
import Header from './components/Header';
import Feed from './components/Feed';
import SearchResult from './components/SearchResult';
import VideoDetails from './components/VideoDetails';

function App() {
  return (
   <Appcontext>
    <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Feed/>} />
    <Route path="/searchResult/:searchQuery" element={<SearchResult/>} />
    <Route path="/video/:id" element={<VideoDetails/>} />
  </Routes>
    </BrowserRouter>
   </Appcontext>
  );
}

export default App;
