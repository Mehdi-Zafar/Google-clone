import { useEffect } from "react";

const NewsSearch = ({dark,newsResult,setNewsResult,webResult,imageResult,searchTerm,setLoading}) => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
    }; 

    useEffect(()=>{
        if(location.pathname === '/news-search' && newsResult === null && (webResult !== null || imageResult !== null)){
            setLoading(true)
            fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${searchTerm}&pageNumber=1&pageSize=10&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null`, options)
                .then(response => response.json())
                .then(response => {
                    setNewsResult(response)
                    setLoading(false)
                })
                .catch(err => console.error(err));
        }
    })

    return ( 
        <div className={dark ? "bg-slate-800 min-h-screen text-rose-50" : "bg-emerald-50 min-h-screen text-slate-800"}>
            {
                newsResult ?
                newsResult?.value?.map((item)=>{
                    return(
                        <div key={item.id} className={dark ? "shadow-sm p-4 my-3 mx-auto w-10/12 rounded-md bg-slate-700 text-rose-50 mmd:w-8/12" :"shadow-sm p-4 my-3 mx-auto w-10/12 rounded-md bg-rose-100 text-slate-800 mmd:w-8/12"}>
                            <div className="flex items-center justify-between">
                                <div className="w-8/12 mmd:w-10/12">
                                    {/* <p className="my-1 text-md text-gray-600">{item.url.length > 30 ? item.url.slice(0,30)+'...' : item.url}</p> */}
                                    <p className="text-sm capitalize">{item.provider.name}</p>
                                    <a href={item.url} target="_blank"><h1 className={dark ? "text-xl my-1 font-semibold text-blue-300 tracking-wider hover:underline" :"text-xl my-1 font-semibold text-blue-600 tracking-wider hover:underline"}>{item.title}</h1></a>
                                    <h4 className="my-1">{item.snippet.replace(/<[^>]+>/g, '').length > 100 ? item.snippet.replace(/<[^>]+>/g, '').slice(0,100)+'...' :item.snippet.replace(/<[^>]+>/g, '')}</h4>
                                </div>
                                <div className="w-2/6 ml-8 mmd:w-1/6">
                                    <img className="rounded-md w-full h-32" src={item.image.url ? item.image.url : "/img-not-available.jpg"}
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null; // prevents looping
                                        currentTarget.src="/img-not-available.jpg";
                                    }} 
                                    alt="news image" 
                                    />
                                </div>
                            </div>
                        </div>
                    )
                }):
                <div className="flex justify-center items-center h-32">
                    <h1 className="text-lg">Enter something to search!</h1>
                </div>
            }
        </div>
     );
}
 
export default NewsSearch;