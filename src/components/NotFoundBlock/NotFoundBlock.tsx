import styles from './NotFoundBlock.module.scss'
export const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            <h1>
                <span className={styles.spanCategories}>🙁</span>
                <br />
                Ничего не найдено
            </h1>
        <p className={styles.descriptin}>К сожалению, данная страница отсутствует в интернет - магазине</p>
        </div>
    );
};
