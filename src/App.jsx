import './App.css'
//import { Recipes } from './components/recipes/recipePage.jsx'
import { Header } from './components/layout/header.jsx'
import { Footer } from './components/layout/footer'
import { PrincipalPage } from './components/principal/principalPage'
import { food } from '../public/assets/recipes'

function App() {

  return (
    <div>
      <Header />
      <PrincipalPage values={food} />
      <Footer />
    </div>
  )
}

export default App
