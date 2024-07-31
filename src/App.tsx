import './App.css'
import Header from './components/Header';
import NewsList from './components/NewsList';
import CurrencyRatesList from './components/CurrencyRatesList';
import CardsList from './components/CardsList';
import MainWidget from './components/MainWidget';

function App() {

  return (
    <>
      <Header />
      <NewsList />
      <CurrencyRatesList />
      <MainWidget />
      <CardsList />
    </>
  )
}

export default App
