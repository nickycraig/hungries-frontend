import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RecipeIndex from './pages/RecipeIndex';
import RecipeShow from './pages/RecipeShow';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes'>
          <Route path='' element={<RecipeIndex />} />
          <Route path=':recipeId' element={<RecipeShow />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
