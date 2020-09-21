import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Button} from 'react-bootstrap';
import { Link} from "react-router-dom";
import fakeData from '../FakeData/FakeData';







const Home = () => {
    
    const [details] = useState(fakeData);
    console.log(details);
    const [id, setId] = useState([]);

    const dynamicChange = (event) => {
        console.log('click');
        setId(event);
    }

    
    return (

        <div className='background'>
        
            <div>
                <div className=' para'>
                    <h1>{id.name} </h1>
                    <p>{id.details} </p>

                    
                <br/>
                <Link to={"/booking/"+id.id}><Button variant="success">Booking  </Button></Link>
            
                </div>
            <div className='image'>
            {
                    details.map(fd => <img  src={fd.img} alt=""  onClick={()=> dynamicChange(fd) } onLoad={()=> dynamicChange(fd) } /> )
                }
            </div>
            
                


            
            </div>

        </div>
    );
};

export default Home;