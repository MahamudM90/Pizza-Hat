import styles from "./ContainerFlex.module.css"

const ContainerFlex = ({children, align, justify, textAlign}) => {
    return (
        <div className={styles.container_flex} style={{ alignItems: align, justifyContent: justify, textAlign: textAlign }}>
            {children}
        </div>
    )
}

export default ContainerFlex;