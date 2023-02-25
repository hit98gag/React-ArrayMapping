import './Cards.css'
function Cards( props){
    return(
        <div className="cards" style={{backgroundColor:props.color}}>
        <h1>{props.num}</h1>
        </div>
    )
}

export default Cards;