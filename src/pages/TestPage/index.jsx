import React from 'react';
import ProgressBar from '../../components/ProgressBar/index';

const TestPage = () => {
  const test = 1;

  return (
    <div style={{width:"800px",height:"500px",backgroundColor:"black", padding:"50px", margin:"0 auto"}}>
      <ProgressBar />
    </div>
  );

  // return (
  //   <div>
  //     <p>{test}</p>
  //   </div>
  // );
};

export default TestPage;
