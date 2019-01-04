import React from 'react';


const Match = props =>{

  return(

    <div className="flex-container">
      {props.matches.map(matchGames => (
        
        <ul key={matchGames.match_id} className="match_ul">
        <div className="leagueHeading">
        <h3>{matchGames.country_name} : {matchGames.league_name}</h3>
        </div>
          <li className="match_li">
           <div className="hometeam teamName"> 
             <h2> 
             {matchGames.match_hometeam_name.split('amp;')} 
             </h2> 
           </div>
           <div className="scores"> 
             <h2>
              {matchGames.match_status === "" 
                ? `${matchGames.match_date}` 
             : `${matchGames.match_hometeam_score}` ? `${matchGames.match_status === ""}` 
             : `${matchGames.match_awayteam_score}`} 
    </h2>
           </div>
           <div className="awayteam teamName">
             <h2> 
               {matchGames.match_awayteam_name.split('amp;')}
             </h2>
           </div>

           <h5 className="match_status">{matchGames.match_status}</h5>




          </li>
        </ul>
      ))}
    </div>

  );

};


export default Match;