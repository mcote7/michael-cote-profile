import React from 'react';

// import DotLoader from "react-spinners/DotLoader";

const Loading = ({loading}) => {
  return (
      // <div></div>
      <div name={loading.toString()} className="my-loader">_GREETINGS_EARTHLING_</div>
  );
};
export default Loading;