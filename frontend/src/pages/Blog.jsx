import { React, useState, useEffect } from "react";

function Blog() {
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
  console.log(entries);

  // function that takes in an array and returns formatted paragraph.
  const arrayToP = function (inputArray) {
    let str = "";
    for (let i of inputArray) {
      console.log(i);
      if (typeof i === "object") {
        console.log("butthole");
        str += i[0];
      } else {
        str += i;
      }
      str += " ";
    }
    return str;
  };

  return (
    <div>
      <div>Blodge</div>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>body</td>
          </tr>
        </thead>
        <tbody>
          {entries.map((entryIterable, idx) => {
            return (
              <tr key={idx}>
                <td>{entryIterable._id}</td>
                <td>{arrayToP(Object.values(entryIterable.entryBody))}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Blog;
