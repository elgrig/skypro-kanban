
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import BrowsePopup from './components/popups/PopBrowse/PopBrowse';
import ExitPopup from './components/popups/PopExit/PopExit';
import NewCardPopup from './components/popups/PopNewCard/PopNewCard';
import { useState, useEffect } from 'react';
import { cardList, statusList } from './data';


function App() {
  const [cards, setCards] = useState(cardList);
  const [ isLoading, setIsLoading ] = useState(true);

  const addCard = () => {
	const newCard = {
	id: cards.length + 1,
	category: 'Web Design',
	title: 'Название задачи',
	date: new Date().toLocaleDateString(),
	status: statusList[0],
	};
	setCards([...cards, newCard])
  };
  useEffect(() => {
	setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <div className="wrapper">
		<ExitPopup />
		<NewCardPopup addCard={addCard} />
		<BrowsePopup />
		<Header />		
		{
			isLoading ? (<p>Данные загружаются...</p>) : <Main cards={cards}/>
		}
    </div>
  )
}

export default App;
