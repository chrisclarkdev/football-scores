import React from 'react';


const LeaguePick = () => {
  return (

    <header style={{backgroundColor: "orange"}}>
      <div className="picker">

    <form>
      <select  className= "selector"id="mySelect">
        <option value="62">Premier League</option>
        <option value="63">Championship</option>
        <option value="64">League 1</option>
        <option value="69">F A Cup</option>
      </select>
    </form>

      </div>
    </header>
  );
};

export default LeaguePick;