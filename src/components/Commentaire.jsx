export const Commentaire = (props) => {

    const {title, body} = props.data
    return <div className="col-4">
        {title} - {body}
    </div>
}