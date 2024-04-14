

import { useState } from "react";
import Table from "./Table";
import "./Searcher.css";
const Searcher = () => {
  const [selectedMeasure, setSelectedMeasure] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const handleSubmit = (event) => {

    event.preventDefault();
    if  (selectedMeasure.length > 0)  {
      setShowTable(true);
    }
  };

  const handleChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedMeasure(selectedOptions);
  };

  return (
    <div className="general_container_searcher">
      <div className="formulario">
        <form className="form" onSubmit={handleSubmit}>
          <label className="label_form" htmlFor="measure">
            Select your measure to search <br/>
            <p className="morethan"> (Ctrl + left click to select more than one option)</p>
          </label>
          <select
            name="measures"
            id="measure"
            className="select_form"
            value={selectedMeasure}
            onChange={handleChange}
            multiple
          >
            <option className="option" value="md">MD</option>
            <option className="option" value="ml">ML</option>
            <option className="option" value="ms">MS</option>
            <option className="option" value="mw">MW</option>
            <option className="option" value="me">ME</option>
            <option className="option" value="mi">MI</option>
            <option className="option" value="mb">MB</option>
            <option className="option" value="mlg">MLG</option>
          </select><br/>
          <input type="submit" value="Send" className="input_send" />
          
        </form>
      
      </div>
      {showTable && selectedMeasure !== "selecciona" && (
        <Table measure={selectedMeasure} />
      )}{" "}
    </div>
  );
};

export default Searcher;
