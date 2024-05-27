import {useState} from "react";

export const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const onClickCategory = () => {
        setActiveIndex(1);
    }

    return (
        <div className="categories">
            <ul>
                <li onClick={onClickCategory} className={activeIndex === 0 ? "active" : ""}>Все</li>
                <li>Мясные</li>
                <li>Вегетарианская</li>
                <li>Гриль</li>
                <li>Острые</li>
                <li>Закрытые</li>
            </ul>
        </div>
    )
}

