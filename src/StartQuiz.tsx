import "./styles/StartQuiz.css"

interface IProps {

}

const StartQuiz = (props: IProps) => {
	return (
		<>
			<h2>Here comes the quiz</h2>
			<h3>Hello quiz</h3>
			<h4>Welcome</h4>
			<h5>Good luck</h5>
			<a onClick={start}>There it is</a>
		</>
	)
}

function start () {
	
}

export default StartQuiz