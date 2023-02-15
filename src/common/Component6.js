import { memo } from "react";

import { useEffect } from "react";

function Component6(user) {

  useEffect(() => {
  console.log("call Hook");  
    // returned function will be called on component unmount 
    return () => {
      console.log("destroy Hook");  
    }
  }, [])

    return (
      <>
        <h1>Component 6</h1>
        <h2>{`Hi ${user.name} again!`}</h2>
      </>
    );


  }


  export default  memo(Component6);