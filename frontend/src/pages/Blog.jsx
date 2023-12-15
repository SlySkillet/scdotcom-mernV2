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

  return (
    <div>
      <div>Blodge</div>
      <table>
        <tr>table</tr>
      </table>
    </div>
  );
}

export default Blog;
