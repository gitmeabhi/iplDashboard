// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamListDetails} = props
  const {id, name, teamImageUrl} = teamListDetails

  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li className="list-item">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
