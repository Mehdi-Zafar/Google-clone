import Navbar from "./components/Navbar"
import Search from "./components/Search"
import Footer from "./components/Footer"
import WebSearch from "./components/WebSearch";
import ImageSearch from "./components/ImageSearch";
import NewsSearch from "./components/NewsSearch";
import { useState } from "react"
import { createBrowserRouter,RouterProvider,createRoutesFromElements,Route } from "react-router-dom";


function App() {
  const [dark,setDark] = useState(false)
  const [webResult,setWebResult] = useState(null)
  const [imageResult,setImageResult] = useState(null)
  const [newsResult,setNewsResult] = useState(null)
  const [loading,setLoading] = useState(false)
  const [searchTerm,setSearchTerm] = useState('')
  const [location,setLocation] = useState('')

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="*" element={<Search dark={dark} webResult={webResult} imageResult={imageResult} newsResult={newsResult} searchTerm={searchTerm} loading={loading} setLoading={setLoading} setLocation={setLocation} setImageResult={setImageResult} setWebResult={setWebResult} setNewsResult={setNewsResult}/>}>
        <Route path="web-search" element={<WebSearch />} />
        <Route path="image-search" element={<ImageSearch />} />
        <Route path="news-search" element={<NewsSearch />}/>
      </Route>
      </>
    )
    );

  return (
    <div className={dark ? "App bg-slate-800" : "App bg-emerald-50"}>
        <Navbar dark={dark} setDark={setDark} setSearchTerm={setSearchTerm} searchTerm={searchTerm} setWebResult={setWebResult} setImageResult={setImageResult} setNewsResult={setNewsResult} setLoading={setLoading} location={location && location}/>
        <RouterProvider router={router}/>
        <Footer dark={dark}/>
    </div>
  )
}

export default App


