import './Dado.css'

function Dado(props) {
    return (
        <div className="dado">{props.value}</div>
    );
}

export default Dado