import { useEffect } from "react";

const ImageSearch = ({dark,imageResult,setImageResult,webResult,newsResult,searchTerm,setLoading}) => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
    }; 

    useEffect(()=>{
        if(location.pathname === '/image-search' && imageResult === null && (webResult !== null || newsResult !== null)){
            setLoading(true)
            fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${searchTerm}&pageNumber=1&pageSize=30&autoCorrect=true`, options)
                .then(response => response.json())
                .then(response => {
                    setImageResult(response)
                    setLoading(false)
                })
                .catch(err => console.error(err));
        }
    })

    return ( 
        <div className={dark ? "bg-slate-800 min-h-screen text-rose-50 flex flex-wrap justify-around" : "bg-emerald-50 min-h-screen text-slate-800 flex flex-wrap justify-around"}>
            {
                imageResult ?
                imageResult?.value?.map((item)=>{
                    return (
                        <div key={item.thumbnail} className="m-3 max-w-xs rounded-md">
                            <a href={item.webpageUrl} target="_blank">
                            <img className="rounded-md w-full h-56 shadow-md" src={item.url}  
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src=item.thumbnail;
                            }} alt="" />
                            <div className="hover:underline">
                                <p className="text-sm text-gray-500">{item.provider.name}</p>
                                <h2>{item.title.length > 35 ? item.title.slice(0,35)+'...' : item.title}</h2>
                            </div>
                            </a>
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
 
export default ImageSearch;