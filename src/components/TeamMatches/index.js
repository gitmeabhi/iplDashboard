// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {newData: [], isLoading: true}

  componentDidMount() {
    this.getTeamList()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formatData = {
      teamBannerUrl: data.team_banner_url,
      latestMatch: this.getFormattedData(data.latest_match_details),
      recentMatch: data.recent_matches.map(eachItem =>
        this.getFormattedData(eachItem),
      ),
    }
    this.setState({newData: formatData, isLoading: false})
  }

  renderRecentMatchList = () => {
    const {newData} = this.state
    const {recentMatch} = newData

    return (
      <ul className="recent-list">
        {recentMatch.map(eachItem => (
          <MatchCard key={eachItem.id} matchDetails={eachItem} />
        ))}
      </ul>
    )
  }

  renderTeamMatches = () => {
    const {newData} = this.state
    const {teamBannerUrl, latestMatch} = newData

    return (
      <div className="both-container">
        <img src={teamBannerUrl} alt="team banner" className="team-bannner" />
        <LatestMatch latestMatchData={latestMatch} />
        {this.renderRecentMatchList()}
      </div>
    )
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#fff" width={80} height={80} />
    </div>
  )

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'MI':
        return 'mi'
      case 'RR':
        return 'rr'
      case 'SRH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {isLoading} = this.state
    const className = `team-matches-container ${this.getRouteClassName()}`
    return (
      <div className={className}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
