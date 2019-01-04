import React from 'react';


const Match = props =>{

  return(

    <div className="flex-container">
      {props.matches.map(matchGames => (
        <ul key={matchGames.match_id} className="match_ul">
          <li className="match_li">
           <div className="hometeam teamName"> 
             <h2> 
             {matchGames.match_hometeam_name.split('amp;')} 
             </h2> 
           </div>
           <div className="scores"> 
             <h2>
               <span className="matchScore">{matchGames.match_hometeam_score}</span>
                 : 
                <span className="matchScore">{matchGames.match_awayteam_score}</span> 
              </h2>
              <h5 className="match_status">{matchGames.match_status}</h5>
           </div>
           <div className="awayteam teamName">
             <h2> 
               {matchGames.match_awayteam_name.split('amp;')}
             </h2>
           </div>
           <h3 className="matchDate">Date: {matchGames.match_date}</h3>
          </li>
        </ul>
      ))}
    </div>

  );

};


export default Match;