import { useState,useEffect, useRef } from "react";
function Forms() {
  let [name, setName] = useState("Dhiraj");
  let [count,setCount] = useState(0);
  let updatecount = useRef(0);
  let forminputvalue = useRef(0);


  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your Name is: ${name}`);
  };

  const [inputs, setValueInputs] = useState({});

  const handleMultiChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setValueInputs((values) => ({ ...values, [name]: value }));
  };

  const handleMultiSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    console.log(forminputvalue.current.value);
    // forminputvalue.current.value = "shubham";

    // setValueInputs(previousState =>{
    //     return {...previousState ,age:11}
    //   });

  };

  useEffect(() => {
    updatecount.current = updatecount.current + 1;
  },[name]);

  // useEffect(() => {
  //   console.log("hello",count);
  //   var timer =  setTimeout(() => {
  //    setCount((count) => count + 1);
  //     console.log("hi");
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // },[count]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetch(`https://api.github.com/users/${inputs.username}`)
  //       .then((res) => res.json())
  //       .then((res) => console.log(res))
  //       .catch((e) => console.error(e));
  //   };

  //   const timer = setTimeout(() => {
  //     fetchData();
  //   }, 5000);

  //   return () => clearTimeout(timer);
    
  // }, [inputs.username]);

  return (
    <div className="">
      <div className="my-3">
        <h6> single input form exmaple </h6>
        <form className="my-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Enter your name:</label>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={name}
                ref={forminputvalue}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <h6>Your name is {name} </h6>
          </div>
        </form>
      </div>

      <div className="my-3">
        <h6>Multi input form exmaple {updatecount.current} </h6>

        <form onSubmit={handleMultiSubmit}>
          <div className="form-group mb-3">
            <label>Enter your name: {inputs.username} </label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={inputs.username || ""}
              onChange={handleMultiChange}
            />
          </div>

          <div className="form-group mb-3">
            <label>Enter your age: {inputs.age}</label>
            <input
              type="number"
              name="age"
              className="form-control"
              value={inputs.age || ""}
              onChange={handleMultiChange}
            />
          </div>
          <input className="btn btn-primary form-control" type="submit" />
        </form>
      </div>
    </div>
  );
}
export default Forms;
