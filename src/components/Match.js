import React from "react";
import LeaguePick from "./LeaguePick";

const Match = props => {
  return (
    <div className="flex-container">
      <LeaguePick />
      <h1 className="leagueHeading">
        {props.matches[0] && props.matches[0].league_name}
      </h1>
      <ul className="match_ul">
        {props.matches.map(matchGames => (
          <div key={matchGames.match_id}>
            <li className="match_li">
              <div className="hometeam teamName">
                <h2>
                  {matchGames.match_hometeam_name.split("&amp; Hove Albion")}
                </h2>
              </div>
              <div className="scores">
                <h2>
                  {matchGames.match_status !== ""
                    ? `${matchGames.match_hometeam_score} : ${
                        matchGames.match_awayteam_score
                      }`
                    : `${matchGames.match_date}`}
                </h2>
              </div>
              <div className="awayteam teamName">
                <h2>
                  {matchGames.match_awayteam_name.split("&amp; Hove Albion")}
                </h2>
              </div>
              <div>
                <h5 className="match_status">{matchGames.match_status}</h5>
              </div>
              {matchGames.statistics[2] && matchGames.statistics[2].home !== ""
                ? `${matchGames.statistics[2].home}%`
                : ""}
              {matchGames.statistics[2] && matchGames.statistics[2].away !== ""
                ? `${matchGames.statistics[2].away}%`
                : ""}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Match;
