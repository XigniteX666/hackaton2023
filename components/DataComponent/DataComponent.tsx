import axios from "axios";
import { useEffect } from "react";

interface DataProps {
  id?: string;
}

function DataComponent(prop: DataProps) {
  useEffect(() => {
    axios
      .get("/api/hello")
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Data component</h1>
      {prop.id}
    </>
  );
}

export default DataComponent;
