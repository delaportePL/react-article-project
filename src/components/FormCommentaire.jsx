import {useState} from "react"

export const FormCommentaire = (props) => {
    const [commentaire, setCommentaire] = useState("")
    function handleKeyUp(e){
        if(e.key === "Enter"){
            props.setData((prevData) => {
                prevData.commentaires.push({text : e.target.value})
                return { ...prevData , commentaires : prevData.commentaires  }
            })
            setCommentaire("");
        }
    }
    return <input type="text" 
        onKeyUp={handleKeyUp} 
        onChange={(e) => setCommentaire(e.target.value)} 
        value={commentaire}
        className="form-control my-3" 
        placeholder="Ajouter un commentaire"/>
}
