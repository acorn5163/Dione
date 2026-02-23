import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Routes, Route } from 'react-router-dom'
import Home from './assets/page/Home'
import Admin from './assets/page/Admin'
import Header_default from './assets/header/Header_default'
import Article_List from './assets/page/Article/Article_List'
import Article_View from './assets/page/Article/Article_View'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Header_default/>}>
        <Route index element={<Home/>} />
        <Route path="admin" element={<Admin/>} />
        <Route path="article">
          <Route index element={<Article_List/>}/>
          <Route path=":id" element={<Article_View/>}/>
        </Route>
      </Route>
    </Routes>
  )
}
export default App
