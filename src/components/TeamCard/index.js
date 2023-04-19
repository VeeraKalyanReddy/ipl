// Write your code here
import {Component} from 'react'
import './index.css'
import {Link} from 'react-router-dom'

class TeamCard extends Component {
  render() {
    const {details} = this.props
    const {name, imageUrl, id} = details
    return (
      <Link to={`/team-matches/${id}`} className="link">
        <li className="lis">
          <img className="team-card-image" alt={name} src={imageUrl} />
          <p className="team-card-name">{name}</p>
        </li>
      </Link>
    )
  }
}
export default TeamCard
