import WebSearch from "./WebSearch";
import ImageSearch from "./ImageSearch";
import NewsSearch from "./NewsSearch";
import { useEffect } from "react";
import { Routes,Route,useNavigate, Link,useLocation} from "react-router-dom"
import { ColorRing } from "react-loader-spinner";

const Search = ({dark,searchTerm,webResult,imageResult,newsResult,loading,setLoading,setLocation,setWebResult,setImageResult,setNewsResult}) => {

    const navigate = useNavigate()
    const location = useLocation()
    const path  = location.pathname

    useEffect(()=>{
        navigate('/web-search')
    },[])

    useEffect(()=>{
        setLocation(location)
    },[path])


    return ( 
        <div className={dark ? "bg-slate-800 min-h-screen text-rose-50" : "bg-emerald-50 min-h-screen text-slate-800"}>
            {/* {
                loading ?
                "Search term":
                <RouterProvider router={router}/>
            } */}
            {/* <h1>Search Component</h1> */}
            {/* <div>
                <Link to="web-search">Web Search</Link>
                <Link to="image-search">Image Search</Link>
                <Link to="news-search">News Search</Link>
            </div> */}
            
            <div className="border-b border-gray-200 dark:border-gray-700">
                <ul className="flex flex-wrap justify-center -mb-px text-xs sm:text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    <li className="mr-0 sm:mr-2">
                        <Link to="web-search" className={location.pathname === '/web-search' ? "inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group" : "inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={location.pathname === '/web-search' ? "mr-2 w-5 h-5 text-blue-600 dark:text-blue-500" : "mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                            Web
                        </Link>
                    </li>
                    <li className="mr-0 sm:mr-2">
                        <Link to="image-search" className={location.pathname === '/image-search' ? "inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group" : "inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"} aria-current="page">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={location.pathname === '/image-search' ? "mr-2 w-5 h-5 text-blue-600 dark:text-blue-500" : "mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                            Images
                        </Link>
                    </li>
                    <li className="mr-0 sm:mr-2">
                        <Link to="news-search" href="#" className={location.pathname === '/news-search' ? "inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group" : "inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={location.pathname === '/news-search' ? "mr-2 w-5 h-5 text-blue-600 dark:text-blue-500" : "mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                            </svg>
                            News
                        </Link>
                    </li>
                </ul>
            </div>
            {!loading ?
            <Routes>
                <Route path="/web-search" element={<WebSearch webResult={webResult} newsResult={newsResult} imageResult={imageResult} dark={dark} setWebResult={setWebResult} searchTerm={searchTerm} setLoading={setLoading}/>}/>
                <Route path="/image-search" element={<ImageSearch webResult={webResult} newsResult={newsResult} imageResult={imageResult} dark={dark} setImageResult={setImageResult} searchTerm={searchTerm} setLoading={setLoading}/>}/>
                <Route path="/news-search" element={<NewsSearch webResult={webResult} newsResult={newsResult} imageResult={imageResult} dark={dark} setNewsResult={setNewsResult} searchTerm={searchTerm} setLoading={setLoading}/>}/>
            </Routes>
            :
            <div className="flex justify-center items-center h-32">
            <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            /></div>}
        </div>
     );
}
 
export default Search;