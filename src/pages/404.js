import s from "../styles/Page404.module.scss";

// кастомная 
const Page404 = () => {
    return (
        <div className={s.blockErr}>
            <h1 className={s.title}> Page not found </h1>
        </div>
    );
};

export default Page404;