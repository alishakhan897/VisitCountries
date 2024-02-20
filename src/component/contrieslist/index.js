import './index.css'

const CountryList = props => {
  const {countrylistdetails, showlist} = props
  const {name, isVisited, id} = countrylistdetails

  const showisit = () => {
    showlist(id)
  }

  return (
    <li className="list-container">
      <p className="name">{name}</p>
      {isVisited === true ? (
        <p>Visited</p>
      ) : (
        <button type="button" className="button" onClick={showisit}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryList
