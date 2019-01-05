import React from 'react';


const Match = props =>{
  return(

    <div className="flex-container">
    <h1 className="leagueHeading">{props.matches[0] && props.matches[0].league_name}</h1>
     <ul className="match_ul">
      {props.matches.map(matchGames => (
        
       <div key={matchGames.match_id}>
          <li className="match_li">
           <div className="hometeam teamName"> 
             <h2> 
             {matchGames.match_hometeam_name.split('amp;')} 
             </h2> 
           </div>
           <div className="scores"> 
             <h2>
              {matchGames.match_status !== "" 
                ? `${matchGames.match_hometeam_score} : ${matchGames.match_awayteam_score}` : `${matchGames.match_date}` }</h2>
           </div>
           <div className="awayteam teamName">
             <h2> 
               {matchGames.match_awayteam_name.split('amp;')}
             </h2>
           </div>
           {matchGames.statistics[2] !== "" ?
            <h5> Possession `${matchGames.statistics[2]&& matchGames.statistics[2].home}`% </h5>
           <h5 className="match_status">`${matchGames.match_status}`</h5>
           <h5>Possession `${matchGames.statistics[2]&& matchGames.statistics[2].away}`%</h5> : "" }

          </li>
        </div>
      ))}
      </ul>
    </div>

  );

};


export default Match;