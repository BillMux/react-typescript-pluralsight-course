import "./styles/StartQuiz.scss";

interface IProps {
    // maybe not needed
}

const QuizIntro = (props: IProps) => {
    return (
        <div className="quizIntro">
            <h2>Here comes the quiz</h2>
            <h3>Hello quiz</h3>
            <h4>Welcome</h4>
            <h5>Good luck</h5>
            <a onClick={start}>There it is</a>
        </div>
    );
};

function start() {
    // hide intro elements
    // reveal first question
    // it's an SPA!
}

export default QuizIntro;
