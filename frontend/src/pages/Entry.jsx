import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Entry = function () {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    async function loadEntries() {
      try {
        const response = await fetch("http://localhost:8080/api/entries/");
        if (response.ok) {
          const data = await response.json();
          setEntries(data);
        } else {
          console.error(response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    loadEntries();
  }, []);

  const entryBodyToJSX = function (p) {
    let input = [];
    for (let pg of p) {
      input.push(Object.values(pg));
    }
    console.log("input=", input);
    return (
      <p>
        {input.map((par, i) => {
          return <div key={i}>{par}</div>;
        })}
      </p>
    );
  };

  return (
    <div>
      {entries.map((entry, i) => {
        return (
          <div key={i}>
            <p>{entry.createdAt}</p>
            <p>{entry.title}</p>
            <p>{entry.image}</p>
            <div>{entryBodyToJSX(Object.values(entry.entryBody))}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Entry;
