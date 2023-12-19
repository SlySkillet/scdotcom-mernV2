import { useEffect, useState, Fragment } from "react";
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

  const parseEntryBody = function (input) {
    let parsedObj = [];
    for (let p of input) {
      parsedObj.push(Object.values(p));
    }
    console.log("parsedObj=", parsedObj);
    return parsedObj;
  };

  const parsedEntryBodyToJSX = function (entryBody) {
    return (
      <div>
        {Object.values(entryBody).map((paragraph, i) => {
          const paragraphContent = Object.values(paragraph).map((item, j) => (
            <Fragment key={j}>
              {typeof item === "string" ? (
                item + " "
              ) : (
                <a key={j} href={item[1]}>
                  {item[0]}
                </a>
              )}
            </Fragment>
          ));

          return <p key={i}>{paragraphContent}</p>;
        })}
      </div>
    );
  };

  /*
line 51 is using a tags because links go nowhere and react
router has not been set up yet. They should be replaced with
Link once that portion of the application is running.
*/

  return (
    <div>
      {entries.map((entry, i) => {
        return (
          <div key={i}>
            <p>{entry.createdAt}</p>
            <p>{entry.title}</p>
            <p>{entry.image}</p>
            <div>
              {parsedEntryBodyToJSX(
                parseEntryBody(Object.values(entry.entryBody)),
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Entry;
