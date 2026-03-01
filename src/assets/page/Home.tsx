import { useEffect, useRef } from "react";
import { Network } from "vis-network";
import { DataSet } from "vis-data";
import VisMap from "../component/vis/visMap";

/** Network図 の Component */
const Home = () => {
  
  return (
    <div className="row">
      <div className="col-6">
        <div>
          {/* Network図 を表示する領域 */}
         <VisMap/>
        </div>
      </div>
      <div className="col-6">
        <h2>test</h2>
      </div>
    </div>
    
  );
};

export default Home;