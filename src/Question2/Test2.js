import React, {
  useState,
  useEffect
} from 'react';

function Test2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data.json').then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, []);

  const dataType = data.map((item) => {
      if (item.type === "team") {
        console.log(item.name, "team header")
          return {image: item.teamCrest, heading: item.name, subtitle: item.sport};
      }

      if (item.type === "venue") {
        console.log(item.name, "venue header")
        return {image: item.image, heading: item.name, subtitle: item.distance};
      }

      if (item.type === "fixture") {
        if (item.team1 && item.team2){
          console.log(`${item.team1} V ${item.team2}`, "fixture header")
          return {image: item.sportLogo, heading: `${item.team1} V ${item.team2}`, subtitle: item.startTime};
        }
        if (item.name) {
          console.log(item.name, "fixture header")
          return {image: item.sportLogo, heading: item.name, subtitle: item.startTime};
        }
        else {
          return null;
        }
      }
  });

  return (
    <div>
      <ul>
      {dataType.map((item, key) => {
            return <li>
              <img src={item.image}></img>
            <h1>{item.heading}</h1>
            <p>{item.subtitle}</p>
            </li>
          })}
      </ul>
    </div>
  );
};

export default Test2;