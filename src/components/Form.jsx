import { useState } from "react"

export const Form = (props) => {
    const [form, setForm] = useState({title: "", body: ""})
    const [article, setArticle] = useState("")

    function handleChange(e) {
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }

    function handleSubmit(e){
        e.preventDefault()
        const {title, body} = form
        if(title&&body){
            setForm({title: "", body: ""})
            console.log(title,body)
            // props.setData((prevData) => {
            //     prevData.articles.push({title:title, body : body})
            //     return { ...prevData , articles : prevData.articles  }
            // })
            // setCommentaire("");
        }
        else{
            alert("Un champ est vide")}
    }

    return <div className="col-12">
        <input value="Masquer le formulaire" className="btn btn-outline-dark my-3"/>
        <form onSubmit={handleSubmit}>
            <input type="title" className="form-control" 
                name="title" placeholder="Titre de l'article" value={form.title} onChange={handleChange}/>
            <textarea id="" className="form-control my-3" 
                name="body" placeholder="Body de l'article" value={form.body} onChange={handleChange}/>
            <input type="submit" value="Créer un nouvel article" className="btn btn-outline-dark"/>
        </form>
    </div>

    
}