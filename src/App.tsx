// import React from 'react';
import './scss/app.scss';
import {Header} from "./components/Header";
import {Categories} from "./components/Categories";
import {Sort} from "./components/Sort";
import {PizzaBlock} from "./components/PizzaBlock/PizzaBlock.tsx";
import {useEffect, useState} from "react";
import Skeleton from "./components/PizzaBlock/Skeleton.tsx";

function App() {


    useEffect(() => {
        fetch('https://668276584102471fa4c70a9d.mockapi.io/title')
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr);
                console.log(items);
                setIsLoading(false);
            });
        return () => {
            // код при размонтировании компонента
        };
    }, []);
    const [items, setItems] = useState(Array<any>);
    const [isLoading, setIsLoading] = useState(true)
    // console.log(pizzas);
    //https://6655ebb93c1d3b60293b99b0.mockapi.io/marketPizza/
  return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? [...new Array(6)].map((_, index) => <Skeleton key = {index}/>)
                        : items.map((obj) => <PizzaBlock key = {obj.id} {...obj} />)
                    // items.map(() => <Skeleton />)//Отображаем только скелетон
                }
            </div>
          </div>
        </div>
      </div>
)
  ;
}

export default App;
