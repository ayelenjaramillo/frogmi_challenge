
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Table.css"

const Table = ({ measure }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    if (measure !== "selecciona") {
      fetch(
        `http://localhost:3000/features/list?mag_type=${measure}`
      )
        .then((response) => response.json())
        .then((data) => {

          setFeatures(data["data"]);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        });
    }
  }, [measure]);

  if (isLoading) {
    return (
      <div className="container_searching">
        <h1>Searching...</h1>
      </div>
    );
  }

  return (
    <table className="table_results">
      <thead className="table_head">
        <tr>
          <th>Id</th>
          <th>Magnitude</th>
          <th>Place</th>
          <th>Time</th>
          <th>URL</th>
          <th>Tsunami</th>
          <th>Mag Type</th>
          <th>Title</th>
          <th>Longitude</th>
          <th>Latitude</th>
          <th>Create comment</th>
        </tr>
      </thead>
      <tbody className="body_table">
        {features.map((feature, index) => (
          <tr key={index} >
            <td>{feature.id}</td>
            <td>{feature.attributes.magnitude}</td>
            <td>{feature.attributes.place}</td>
            <td>{new Date(feature.attributes.time).toLocaleString()}</td>
            <td>
              <a
                href={feature.attributes.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Link
              </a>
            </td>
            <td>{feature.attributes.tsunami ? "Yes" : "No"}</td>
            <td>{feature.attributes.mag_type}</td>
            <td>{feature.attributes.title}</td>
            <td>{feature.attributes.coordinates.longitude}</td>
            <td>{feature.attributes.coordinates.latitude}</td>
            <td>
            <Link to={`/create_comment/${feature.id}`}>
                <button className="comment_button" >Create comment </button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
Table.propTypes = {
  measure: PropTypes.string.isRequired, // Validación de PropTypes para la prop "measure"
};
export default Table;
