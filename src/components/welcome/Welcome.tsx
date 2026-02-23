import Quiz from "../../assets/quiz.svg";
import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.container}>
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="Ícone do quiz" />
    </div>
  );
};

export default Welcome;
