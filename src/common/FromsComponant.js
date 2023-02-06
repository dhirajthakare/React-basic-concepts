import { useState } from "react";
function Forms() {
  let [name, setName] = useState("Dhiraj");
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
  };

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
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <h6>Your name is {name} </h6>
          </div>
        </form>
      </div>

      <div className="my-3">
        <h6>Multi input form exmaple</h6>

        <form onSubmit={handleMultiSubmit}>
          <div className="form-group mb-3">
            <label>Enter your name:</label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={inputs.username || ""}
              onChange={handleMultiChange}
            />
          </div>

          <div className="form-group mb-3">
            <label>Enter your age:</label>
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
