import React from 'react';


const Match = props =>{

  return(

    <div className="flex-container">
      {props.matches.map(matchGames => (
        <ul className="match_ul">
          <li className="match_li">
          <h2> {matchGames.match_hometeam_name.split('amp;')} <span className="matchScore">{matchGames.match_hometeam_score}</span>  : <span className="matchScore">{matchGames.match_awayteam_score}</span> {matchGames.match_awayteam_name.split('amp;')} </h2>
          </li>
        </ul>
      ))}
    </div>

  );

};


export default Match;