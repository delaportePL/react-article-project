import { useEffect, useState } from "react"

export const ArticleList = () => {
    const [data , setData] = useState([])
    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(reponse => reponse.json())
        .then(data => {
            let top3 = data.slice(-3)
            setData(top3)
        })
    },[])

    
    return <div>
        { data.map( item => (
            <article className="col-12">
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </article>
        ))}
    </div>
}