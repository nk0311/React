// import React from 'react';
import { Video } from 'react-feather';
// import '../../App.css';
import '../../Quiz.css';



import React, { useState } from 'react';

export default function App() {

	
	const questions = [
		{
			questionText: 'Which of the following is a key characteristic of the "model minority" stereotype?',
			answerOptions: [
				{ answerText: 'It recognizes the diversity and complexity of different minority groups', isCorrect: false },
				{ answerText: 'It acknowledges the systemic barriers and discrimination faced by minority groups', isCorrect: false },
				{ answerText: 'It assumes that all members of a minority group share the same experience and opportunities', isCorrect: true },
				{ answerText: 'It advocates for greater representation and inclusion of minority groups in society', isCorrect: false },
			],
		},
		{
			questionText: 'How can individuals and society challenge the "model minority" stereotype?',
			answerOptions: [
				{ answerText: 'By recognizing and valuing the diversity and complexity of different minority groups', isCorrect: true },
				{ answerText: 'By encouraging competition and comparison between different minority groups', isCorrect: false },
				{ answerText: 'By ignoring and dismissing the experiences and perspectives of minority groups', isCorrect: false },
				{ answerText: 'By promoting assimilation and conformity to the dominant culture', isCorrect: false },
			],
		},
		{
			questionText: 'The "model minority" stereotype is often applied to which group of people?',
			answerOptions: [
				{ answerText: 'White Americans', isCorrect: false },
				{ answerText: 'African Americans', isCorrect: false },
				{ answerText: 'Hispanic Americans', isCorrect: false },
				{ answerText: 'Asian Americans', isCorrect: true },
			],
		},
		{
			questionText: 'What is the term used to describe the experience of Asian Americans who are constantly viewed as foreigners despite being born in the United States?',
			answerOptions: [
				{ answerText: 'Transient Tourist', isCorrect: false },
				{ answerText: 'Permanent Resident', isCorrect: false },
				{ answerText: 'Perpetual Foreigner', isCorrect: true },
				{ answerText: 'Temporary Traveler', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is a consequence of the Perpetual Foreigner stereotype?',
			answerOptions: [
				{ answerText: "Feeling a sense of belonging and acceptance in one's own country", isCorrect: false },
				{ answerText: "Experiencing discrimination and racism based on one's perceived foreignness", isCorrect: true },
				{ answerText: "Being treated with respect and dignity in the workplace", isCorrect: false },
				{ answerText: 'Having access to equal opportunities and resources', isCorrect: false },
			],
		},

		{
			questionText: "The Perpetual Foreigner stereotype can impact which of the following aspects of a person's life?",
			answerOptions: [
				{ answerText: 'Social interactions and relationships', isCorrect: false },
				{ answerText: 'Educational opportunities and achievement', isCorrect: false },
				{ answerText: 'Career development and advancement', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
		
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			<video src='/videos/video-1.mp4' autoPlay loop muted />
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}