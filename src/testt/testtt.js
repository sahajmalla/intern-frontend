import { useParams } from "react-router-dom"

const testtt = () => {
    const {id} = useParams();
    const join =()=>{
        alert(id)
    }
    return (
        <button onClick={join}>
        </button>
    )
}

export default testtt
