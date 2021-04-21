import { useEffect, useState } from 'react';
import { randomNumber } from './utils'

function QuoteBox() {
	const [allQuotes, setAllQuotes] = useState([])
	const [currentQuote, setCurrentQuote] = useState({ text: "", author: "" })

	const getNewQuote = () => {
		const index = randomNumber(0, allQuotes.length)
		console.log(index)
		const newQuote = allQuotes[index]
		return newQuote
	}


	useEffect(() => {
		fetch("https://type.fit/api/quotes")
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
				setAllQuotes(data);
			})
	}, [])

	useEffect(() => {
		setNewQuote();
	}, [allQuotes])


	const setNewQuote = () => {
		const newQuote = getNewQuote();
		console.log("new quote", newQuote)
		if (newQuote) {
			if (newQuote.author === null) {
				newQuote.author = "Unknown"
			}
		}
		setCurrentQuote(newQuote);
	}

	return (
		<div id="quote-box">
			{currentQuote && <h2 id="text">"{currentQuote.text}"</h2>}
			{currentQuote && <h3 id="author">- {currentQuote.author}</h3>}
			<button onClick={setNewQuote} id="new-quote">New quote</button>
			{currentQuote && <a target="_blank"
				rel="noreferrer"
				href={`https://twitter.com/intent/tweet?text=${currentQuote.text} - ${currentQuote.author}`}
				id="tweet-quote"
			>Tweet quote</a>}
		</div>
	);
}

export default QuoteBox;
