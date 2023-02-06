
import logo from '../logo.svg';
import SecondComponant from './SecondComponant';
function FirstComponant(props) {
    return (
      <div>
        <div className='col-md-2 row m-2'>
        <div  className='d-flex'>
            <img height="20px" width="20px" src={logo} alt="Logo"></img>
            <h4>Hi {props.name},</h4>
        </div>
        </div>

        <SecondComponant name={props.name} middleName='Sanjay'/>
      </div>
    );
  }
  
  export default FirstComponant;