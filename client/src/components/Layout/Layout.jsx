import styles from './Layout.module.css'
import Header from "../Header/Header";

const Layout = ({children}) => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.wrapper_top}>
                <Header />
                <main>
                    {children}
                </main>
            </div>
            <div className={styles.wrapper_bottom}>
                <footer>Footer Text</footer>
            </div>
        </div>
    )
}

export default Layout;