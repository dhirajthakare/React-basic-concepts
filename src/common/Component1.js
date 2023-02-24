
import { useState , createContext,useContext  } from "react"; 
import Component6 from "./Component6";

let Context = createContext();

function Component1() {
    const [user, setUser] = useState(["Dhiraj","Thakare"]);
    const [count,incCount] = useState(0);

    let  countAdd = ()=>{
      incCount((count) => count + 1)
      // setUser((c=>[...c,"mayrur"]));

    }
  
    return (
      <>
       <div>
       { count%10 == 0 && <Component6 name={user} />}
      <h4>Count = {count}</h4>
      <button onClick={countAdd} >Count</button>
       </div>
      <Context.Provider value={user}>
      <h4>{`Hi ${user}!`}</h4>
        <Component2/>
      </Context.Provider>
      
      </>
    );
  }
  
  function Component2() {
    return (
      <>
        <h4>Component 2</h4>
        <Component3  />
      </>
    );
  }
  
  function Component3() {
    return (
      <>
        <h4>Component 3</h4>
        <Component4 />
      </>
    );
  }
  
  function Component4() {
    return (
      <>
        <h4>Component 4</h4>
        <Component5 />
      </>
    );
  }
  
  function Component5() {
    var user = useContext(Context);
    return (
      <>
        <h4>Component 5</h4>
        <h5>{`Hi ${user} again!`}</h5>
      </>
    );
  }


  export default Component1;