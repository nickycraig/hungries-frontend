import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RecipeIndex from './pages/RecipeIndex';
import RecipeShow from './pages/RecipeShow';
import RecipeEdit from './pages/RecipeEdit';
import RecipeDelete from './pages/RecipeDelete';
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
          <Route path=':recipeId'>
            <Route path='' element={<RecipeShow />} />
            <Route path='edit' element={<RecipeEdit />} />
            <Route path='delete' element={<RecipeDelete />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
