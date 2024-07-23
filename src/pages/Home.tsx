import {Categories} from "../components/Categories.tsx";
import {Sort} from "../components/Sort.tsx";
import Skeleton from "../components/PizzaBlock/Skeleton.tsx";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock.tsx";
import {useEffect, useState} from "react";

export const Home = () => {

    const [items, setItems] = useState(Array<any>);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://668276584102471fa4c70a9d.mockapi.io/title')
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr);
                console.log(items);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
        return () => {
            // код при размонтировании компонента
        };
    }, []);

    return (
        <>
            <div className="container">
                <div className="content__top">
                    <Categories/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {
                        isLoading ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                            : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
                        // items.map(() => <Skeleton />)//Отображаем только скелетон
                    }
                </div>
            </div>
        </>
    );
};
