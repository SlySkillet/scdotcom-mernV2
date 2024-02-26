import { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import "./blog-styles.css";
import "./thumbnail-styles.css";
import "./icon-styles.css";

import imagesDirectory from "./imagesDirectory";
import iconsDirectory from "./iconsDirectory";

import parseEntryLinks from "./parseEntryLinks";

const Blog = function () {
  const host = process.env.REACT_APP_SERVER_IP;
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    async function loadEntries() {
      try {
        const response = await fetch(`https://${host}/api/entries/`, {
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
                <Link
                  className="entry-link"
                  key={j}
                  to={item[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item[0]}
                </Link>
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
                        <div className="thumbnail">
                          <img
                            src={imagesDirectory[entry.image.img]}
                            alt="img"
                            id={entry.image.styleId}
                          />
                          <p className="caption">
                            image:{" "}
                            <Link
                              className="entry-link"
                              to={entry.image.creditUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {entry.image.credit}
                            </Link>
                          </p>
                        </div>
                      )
                    ) : null}
                    <div>
                      {parsedEntryBodyToJSX(
                        parseEntryBody(Object.values(entry.entryBody))
                      )}
                    </div>
                    <ul>
                      {entry.links.map((listItem, i) => {
                        return parseEntryLinks(listItem, i);
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
