import 'bulma/css/bulma.css';
import foodsJson from '../foods.json';
import React, { useEffect, useState } from 'react';
import FoodBox from './FoodBox';
import Search from './Search';
import TodayFoods from './TodayFoods';

import Form from './Form';

function App() {
  const [foods, setFoods] = useState([...foodsJson]);
  const [searchFood, setSearchFood] = useState('');
  const [todaysFood, setTodaysFodd] = useState([]);

  // function useState(valorinicial) {
  //   const valor = valorinicial

  //   function altearvalor(novovalor) {
  //     valor = novovalor
  //   }

  //   return[valor,altearvalor]
  // }

  function addFood(food) {
    // const clone = [...food]
    // clone.push(food)

    setFoods([...foods, food]);
  }
  function trashButton(remove) {
    const clone = [...todaysFood];
    clone.splice(remove, 1);
    setTodaysFodd([...clone]);
  }
  // add food on todaysFood
  function onFoodAdd(food) {
    const eveythingButFood = todaysFood.filter((element) => {
      return element.name !== food.name;
    });

    const calcNewTotal = todaysFood.filter((element) => {
      return element.name === food.name;
    });

    const quantityAux = calcNewTotal.reduce((acc, current) => {
      return { ...current, quantity: acc.quantity + current.quantity };
    }, food);

    setTodaysFodd([...eveythingButFood, quantityAux]);
  }

  useEffect(() => {
    filterFood(searchFood);
  }, [searchFood]);

  function filterFood(term) {
    const clone = [...foods];

    const filtered = clone.filter((element) => {
      return element.name.toLowerCase().includes(term.toLowerCase());
    });

    setFoods(filtered);

    if (!term) {
      setFoods([...foodsJson]);
    }
  }
  return (
    <div className="container">
      <h1 className="title">IronNutrition</h1>
      <Form onClick={addFood} />
      <Search
        value={searchFood}
        onChange={(event) => setSearchFood(event.target.value)}
      />
      <div className="columns">
        <div className="column">
          <div>
            {foods.map((element) => (
              <FoodBox
                key={element.name}
                food={element}
                onFoodAdd={onFoodAdd}
              />
            ))}
          </div>
        </div>
        <div className="column">
          <TodayFoods todayFoods={todaysFood} trashFood={trashButton} />
        </div>
      </div>
    </div>
  );
}

export default App;
