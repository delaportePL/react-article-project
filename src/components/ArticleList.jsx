import { useEffect, useState } from "react"

export const ArticleList = () => {
    const [data , setData] = useState({title : "",body : ""})
    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(reponse => reponse.json())
        .then(data => {
            let top3 = data.slice(0, 3)
            console.log(top3)
            setData(top3)
        })
    },[])

    
    return <article className="col-4">
        <h2>Salut</h2>
        <ul>
            { data.map( item => (
                <li>
                    <h2>item.title</h2>
                    <p>item.body</p>
                </li> 
            ))}
        </ul>
    </article>
}