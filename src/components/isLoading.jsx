import React from 'react';
import DotLoader from "react-spinners/DotLoader";

const Loading = ({loading}) => {
  return (
    <div className="loaderWrapper">
      <DotLoader size={250} color={"#fff8dc"} loading={loading}/>
    </div>
  );
};

export default Loading;