// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  // eslint-disable-next-line react/no-unused-state
  state = {matchesList: [], isLoading: true}

  componentDidMount() {
    this.getMatchesList()
  }

  getMatchesList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      name: each.name,
      imageUrl: each.team_image_url,
      id: each.id,
    }))
    this.setState({matchesList: updatedData, isLoading: false})
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderMatchesList = () => {
    const {matchesList} = this.state
    return (
      <ul className="team-list-items">
        {matchesList.map(each => (
          <TeamCard key={each.id} details={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-cont">
        <div className="top-head">
          <img
            className="ipl-img"
            alt="ipl logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
          />
          <h1 className="head">IPL Dashboard</h1>
        </div>
        {isLoading ? this.renderLoader() : this.renderMatchesList()}
      </div>
    )
  }
}
export default Home
