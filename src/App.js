import React from 'react'
import Header from './Components/Header/Header'
import {originals,history,drama,action,comedy,romance,horror,documentaries} from './urls'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={history} title='History' isSmall />
      <RowPost url={drama} title='Drama' isSmall />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={documentaries} title='Documentaries' isSmall />
      <Footer />
    </div>
  );
}

export default App
