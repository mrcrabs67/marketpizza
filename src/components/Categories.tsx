import {useState} from "react";

export const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const categories: ReadonlyArray<string> = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    const onClickCategory = (index: number) => {
        setActiveIndex(index);
    }

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((value: string, index) => {
                        return <li key={index} onClick={() => onClickCategory(index)} className={activeIndex === index ? "active" : ""}>{value}</li>
                        }

                    )
                }
            </ul>
        </div>
    )
}

