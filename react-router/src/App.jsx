import { Routes, Route } from 'react-router-dom'
import './App.css'

import UserProfile from './components/UserProfile'
import ContactPage from './components/ContactPage'
import AboutPage from './components/AboutPage'
import Layout from './components/Layout'

const App = () => {
  return (
    <>
      <h1>Hello, React Router!</h1>
      <div className="text-3xl font-bold underline text-yellow-300 mb-3">React Vite + TailwindCSS</div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
