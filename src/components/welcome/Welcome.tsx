import { useContext } from "react";
import Quiz from "../../assets/quiz.svg";
import styles from "./Welcome.module.css";
import { QuizContext } from "../../context/quiz";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className={styles.container}>
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
        Iniciar
      </button>
      <img src={Quiz} alt="Ícone do quiz" />
    </div>
  );
};

export default Welcome;
