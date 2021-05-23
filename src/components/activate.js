import React,{useState} from 'react';
import {useParams, useHistory,Redirect} from 'react-router-dom';
import axios from 'axios';
import {handleErrors} from './login'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row,Button} from 'react-bootstrap';
import '../App.css';

function Activate (){
    const history = useHistory();
    const [message,setMessage]=useState("");
    const {token} = useParams();
    const [error, setError] = useState("");
  
const handleSubmit = () =>
{
    setMessage("")
    if(token)
    {
        axios.get('http://localhost:5000/user/activate-user', {
            params: {
                token
            }
          })
          .then( (response) =>{
              let data = response.data
            console.log(data.message);
            setMessage(data.message);
            history.push('/')
          }) .catch((error)=>(error.response.data));
   
    }

    }

    return(
        <>
        <Container>
            <Row>
                <Col xs={12} md={3}></Col>  
                <Col xs={12} md={7} className="  my-5 pt-5">
                <h6 style={{fontSize:"20px",color:"white"}} className="text-style">Click on the  button to activate your HelpDesk ticketing account!!! </h6>
                <div className="text-center my-3 pt-5 text-style">
                <Button type="submit"onClick={handleSubmit}  variant="success" sm>Activate</Button>
                </div>
                <div className='text-style text-center'>     
                    <p style={{color:"white"}} >{message}</p>
                </div>

                </Col>
            </Row>
        </Container>

 
        </>
    )
}

export default Activate;