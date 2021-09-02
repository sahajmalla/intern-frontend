import { useParams } from "react-router-dom"

const Testtt = () => {
    const {id} = useParams();
    const join =()=>{
        alert(id )
    }
    return (
        <button onClick={join}>
            adadd
        </button>
    )
}

export default Testtt
