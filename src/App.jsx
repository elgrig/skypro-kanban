
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import BrowsePopup from './components/popups/PopBrowse/PopBrowse'
import ExitPopup from './components/popups/PopUser/PopUser'
import NewCardPopup from './components/popups/PopNewCard/PopNewCard'

function App() {

  return (
    <div className="wrapper">
		<ExitPopup />
		<NewCardPopup />
		<BrowsePopup />
		<Header />
		<Main />
    </div>
  )
}

export default App
