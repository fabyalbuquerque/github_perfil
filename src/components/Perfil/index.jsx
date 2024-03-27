import styles from './Perfil.module.css'

// export default () => {}
// export default function () {}
const Perfil = ({ nomeUsuario }) /*(props) */ => {
    // const { endereco, nome } = props;

    return (
        <header className={styles.header}>
            {/* {JSON.stringify(props)} //se receber props como argumento */}
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`}/>   {/*props.endereco*/}
            <h1 className={styles.name}>{nomeUsuario}</h1>         {/* /*props.nome*/ }
        </header>
    )
}

export default Perfil;