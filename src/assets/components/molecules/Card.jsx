import './Card.css'
function Card({ data }) {
    return(
        <div className='container'>
            <div>
                <label>name</label>
            </div>
            <div>
                <label>{data.name}</label>
                <label>{data.ki}</label>
                <label>{data.maxki}</label>
            </div>
        </div>
    )
}

export default Card; 