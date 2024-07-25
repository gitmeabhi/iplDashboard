import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails
  const getMatchStatusClassName = status =>
    status === 'WON' ? 'match-won' : 'match-lost'
  const matchClassName = `match-status ${getMatchStatusClassName(matchStatus)}`
  return (
    <li className="match-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
