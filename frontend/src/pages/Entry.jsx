import { useEffect, useState, Fragment } from "react";
// import { Link } from "react-router-dom";

const Entry = function () {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    async function loadEntries() {
      try {
        const response = await fetch("http://localhost:8080/api/entries/");
        if (response.ok) {
          const data = await response.json();
          const sortedData = data.sort((a, b) => {
            return (
              new Date(b.date ? b.date : b.createdAt) -
              new Date(a.date ? a.date : a.createdAt)
            );
          });
          setEntries(sortedData);
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
  const dateFormat = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div>
      {entries.map((entry, i) => {
        return (
          <div key={i}>
            <p>
              {entry.date
                ? entry.date
                : new Date(entry.createdAt).toLocaleDateString(
                    "en-US",
                    dateFormat,
                  )}
            </p>
            <p>{entry.title}</p>
            <p>{entry.image}</p>
            <div>
              {parsedEntryBodyToJSX(
                parseEntryBody(Object.values(entry.entryBody)),
              )}
            </div>
            <ul>
              {entry.links.map((link, i) => {
                return (
                  <li key={i}>
                    <a href={link[1]}>{link[0]}</a>
                  </li>
                );
              })}
            </ul>
            <p>
              {"# "}
              {entry.tags.map((tag, i) => {
                return i < entry.tags.length - 1 ? tag + ", " : tag;
              })}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Entry;
