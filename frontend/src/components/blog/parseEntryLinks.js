import { Link } from "react-router-dom";

const parseEntryLinks = function (listItem, i) {
  return (
    <li key={i}>
      {listItem.map((item, idx) => {
        return typeof item === "string" ? (
          idx === 0 ? (
            item + " "
          ) : (
            " " + item
          )
        ) : (
          <Link
            className="entry-link"
            key={idx}
            to={item[1]}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item[0]}
          </Link>
        );
      })}
    </li>
  );
};

export default parseEntryLinks;
