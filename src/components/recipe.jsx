import ReactMarkdown from "react-markdown"
import "../assets/bootstrap/css/bootstrap.min.css";

export default function Recipe(props){
    return(
        <section className="border border-dark rounded-5 p-5" style={{ backgroundColor: "#DFDFDF"}}>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}