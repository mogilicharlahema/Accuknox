import React from 'react';
import { useSelector } from 'react-redux';
import Category from './components/Category';
import Navbar from './components/Navbar';

const App = () => {
  const categories = useSelector((state) => state.categories);

  return (
    <>
 
    <div className="app" style={{backgroundColor:"#f4f4f4"}}>
    <Navbar categoryList={categories} />
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
    </>
  );
};

export default App;
