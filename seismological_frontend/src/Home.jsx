import "./Home.css";
import Searcher from "./Searcher";

const Home = () => {
  return (
    <div className="general_container_home">
      <h1 className="main_title"> Seismological Overview </h1>
      <span>
        <p className="description_text_home">
          This site provides insights, analysis and updates on earthquakes and
          seismic activity around the world.
        </p>
      </span>
      <div><Searcher/></div>
    </div>
  );
};
export default Home;
