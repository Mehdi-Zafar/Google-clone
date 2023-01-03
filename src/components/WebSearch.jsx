import { useEffect } from "react";

const WebSearch = ({dark,webResult,setWebResult,newsResult,imageResult,searchTerm,setLoading}) => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
    }; 

    useEffect(()=>{
        if(location.pathname === '/web-search' && webResult === null && (imageResult !== null || newsResult !== null)){
            setLoading(true)
            fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI?q=${searchTerm}&pageNumber=1&pageSize=10&autoCorrect=true`,options)
                .then(response => response.json())
                .then(response => {
                    setWebResult(response)
                    setLoading(false)
                })
                .catch(err => console.error(err));
        }
    })

    return ( 
        <div className={dark ? "bg-slate-800 min-h-screen text-rose-50" : "bg-emerald-50 min-h-screen text-slate-800"}>
            {
                webResult ?
                webResult?.value?.map((item)=>{
                    return(
                        <div key={item.id} className={dark ? "shadow-md flex items-center flex-col sm:flex-row p-4 my-3 mx-auto w-11/12 xs:w-10/12 bg-slate-700 text-rose-50 rounded-md mmd:w-8/12" :"shadow-sm flex items-center flex-col sm:flex-row p-4 my-3 mx-auto w-11/12 xs:w-10/12 bg-rose-100 text-slate-800 rounded-md mmd:w-8/12"}>
                            <div className="w-full sm:w-10/12">
                                <p className={dark ? "my-1 text-md text-gray-300" :"my-1 text-md text-gray-600"}>{item.url.length > 25 ? item.url.slice(0,25)+'...' : item.url}</p>
                                <a href={item.url} target="_blank"><h1 className={dark ? "text-xl my-1 font-semibold text-blue-300 tracking-wider hover:underline" :"text-xl my-1 font-semibold text-blue-600 tracking-wider hover:underline"}>{item.title}</h1></a>
                                <h4 className="my-1">{item.snippet.replace(/<[^>]+>/g, '').length > 170 ? item.snippet.replace(/<[^>]+>/g, '').slice(0,170)+'...' :item.snippet.replace(/<[^>]+>/g, '')}</h4>
                            </div>
                            <div className="w-full flex justify-center sm:w-1/6 sm:ml-4">
                                <img className="rounded-md w-48 sm:w-32 h-24" src={item.image.url ? item.image.url : "/img-not-available.jpg"}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src="/img-not-available.jpg";
                                }} 
                                alt="web image"
                                />
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
 
export default WebSearch;