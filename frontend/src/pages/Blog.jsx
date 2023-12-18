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

  // function that takes in an array and returns formatted paragraph.
  const arrayToP = function (inputArray) {
    let bodyParagraphs = [];
    for (let i of inputArray) {
      let str = "";
      for (let j of Object.values(i)) {
        if (typeof j === "object") {
          str += j[0];
        } else {
          str += j;
        }
        str += " ";
      }
      bodyParagraphs.push(str);
    }
    console.log(bodyParagraphs);
    return bodyParagraphs;
  };

  // function to write paragraph for p in bodyParagraphs
  const bodyParagraphToJSX = function (bodyParagraphs) {
    return (
      <div>
        {bodyParagraphs.map((p, idx) => {
          return <p key={idx}>{p}</p>;
        })}
      </div>
    );
  };

  return (
    <div>
      <div>Blodge</div>
      <div>
        {entries.map((entryIterable, idx) => {
          return (
            <div key={idx}>
              {/* date */}
              <p>
                {entryIterable.date
                  ? entryIterable.date
                  : entryIterable.createdAt}
              </p>

              {/* title */}
              <p>{entryIterable.title}</p>

              {/* image */}
              <p>{entryIterable.image ? entryIterable.image : null}</p>

              {/* entry body */}
              <p>
                {bodyParagraphToJSX(
                  arrayToP(Object.values(entryIterable.entryBody)),
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
