import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./ResultComponent.css"

const ResultComponent = () => {
    const [attempted, setAttempted] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);

    useEffect(() => {
        const quizScoresString = localStorage.getItem('quizScores');
        if (quizScoresString) {
            const quizScores = JSON.parse(quizScoresString);
            setAttempted(quizScores.attempted);
            setCorrect(quizScores.correct);
            setWrong(quizScores.wrong);
        } else {
            setAttempted(0);
            setCorrect(0);
            setWrong(0);
        }
    }, []);

    const percentage = () => {
        return parseInt((correct / 15) * 100);
    };

    return (
        <>
            <div className="body3">
                <h1 className='head'>Result</h1>
                <div className="containerResult">
                    <h3>{percentage() > 50 ? "Congratulations You passed!" : "Practice more!"}</h3>
                    <h1 className='score'>Your score is {percentage()}%</h1>
                    <div className="results">
                        <p>Total number of questions:<span>15</span>  </p>
                        <p>Number of attempted questions: <span>{attempted} </span></p>
                        <p>Number of correct answers: <span>{correct}</span> </p>
                        <p>Number of wrong answers: <span>{wrong}</span></p>
                    </div>
                </div>
                <div className="btns">
                    <Link to={"/quiz"}>
                        <button className='btn' id='play'>Play Again</button>
                    </Link>
                    <Link to={"/"}>
                        <button className='btn' id='back'>Back to home</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ResultComponent;
