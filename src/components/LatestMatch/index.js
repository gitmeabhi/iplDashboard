// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData

  return (
    <div className="container">
      <h1 className="heading">Latest Matches</h1>
      <div className="match-card">
        <div className="details-logo">
          <div className="detail-1">
            <p className="name">{competingTeam}</p>
            <p className="name">{date}</p>
            <p className="name">{venue}</p>
            <p className="name">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="logo"
          />
          <hr className="separator" />
          <div className="details-2">
            <p className="name"> First Innings </p>
            <p className="name"> {firstInnings} </p>
            <p className="name"> Second Innings </p>
            <p className="name"> {secondInnings} </p>
            <p className="name"> Man Of The Match </p>
            <p className="name"> {manOfTheMatch} </p>
            <p className="name"> Umpires </p>
            <p className="name"> {umpires} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
