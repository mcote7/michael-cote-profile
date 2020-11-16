import React from 'react';

import DotLoader from "react-spinners/DotLoader";

const Loading = ({loading}) => {
  return (
    <div className="loaderWrapper">
      <DotLoader size={250} color={"#ffffff8c"} loading={loading}/>
    </div>
  );
};
export default Loading;