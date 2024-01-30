import { useEffect, useState, Fragment } from "react";
import "./blog-styles.css";
import "./thumbnail-styles.css";
import "./icon-styles.css";
// import { Link } from "react-router-dom";
import { FaEarlybirds } from "react-icons/fa";
import imagesDirectory from "./imagesDirectory";
import iconsDirectory from "./iconsDirectory";

const Blog = function () {
  const host = process.env.REACT_APP_SERVER_IP;
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    async function loadEntries() {
      try {
        const response = await fetch(`http://${host}/api/entries/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          const sortedData = data.sort((a, b) => {
            return (
              new Date(b.date ? b.date : b.createdAt) -
              new Date(a.date ? a.date : a.createdAt)
            );
          });
          console.log(sortedData);
          setEntries(sortedData);
        } else {
          console.error(response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    loadEntries();
  }, [host]);

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

          return (
            <p className="paragraph" key={i}>
              {paragraphContent}
            </p>
          );
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
    <div className="container">
      <div className="blog header">
        <p className="blog title"> Blog </p>
        <p className="blog subtext">
          come here for your daily dose of the goods
        </p>
      </div>
      <div className="main-container">
        <div className="timeline">
          {entries.map((entry, i) => {
            return (
              <div
                key={i}
                className={
                  i === 0
                    ? "entry-container first left"
                    : i % 2 === 1
                    ? "entry-container right"
                    : "entry-container left"
                }
              >
                <div
                  key={i}
                  className={
                    i % 2 === 1
                      ? "timeline-icon right-icon"
                      : "timeline-icon left-icon"
                  }
                >
                  <div className="icon-wrapper">
                    {
                      <i className="icon" id={entry.subject}>
                        {iconsDirectory[entry.subject]}
                      </i>
                    }
                  </div>
                </div>
                <div className="entry">
                  <p className="date">
                    {entry.date
                      ? entry.date
                      : new Date(entry.createdAt).toLocaleDateString(
                          "en-US",
                          dateFormat
                        )}
                  </p>
                  <h4 className="title">{entry.title}</h4>
                  <div className="inner-entry">
                    {typeof entry.image === "object" ? (
                      entry.image.type === "react-icon" ? (
                        <div
                          className="thumbnail"
                          id={entry.image.styleId}
                          style={{ fontSize: entry.image.width }}
                        >
                          {imagesDirectory[entry.image.img]}
                        </div>
                      ) : (
                        <img
                          className="thumbnail"
                          src={imagesDirectory[entry.image.img]}
                          alt="img"
                          id={entry.image.styleId}
                        />
                      )
                    ) : null}
                    {/* {typeof entry.image === "object" ? (
                      <div
                        className="thumbnail"
                        id={entry.image.styleId}
                        style={{ fontSize: entry.image.width }}
                      >
                        {imagesDirectory[entry.image.img]}
                      </div>
                    ) : null} */}
                    <div>
                      {parsedEntryBodyToJSX(
                        parseEntryBody(Object.values(entry.entryBody))
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
                  </div>
                  <div className="lower-entry">
                    <p className="tags">
                      {"# "}
                      {entry.tags.map((tag, i) => {
                        return i < entry.tags.length - 1 ? tag + ", " : tag;
                      })}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
