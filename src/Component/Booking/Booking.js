import React from 'react';
import './Booking.css';
import { Button } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import fakeData from '../FakeData/FakeData';







const Booking = () => {

    const {id} = useParams();
    

    return (

        <div className='container'>

            <div className='col=md-6'>
                <div className='booking1 '>
                    <h1 style={{ color: 'white' }}>{fakeData[id].name} </h1>
                    <p style={{ color: 'white' }}>{fakeData[id].details}</p>

                </div>

                <div className='col-md-6 booking2'>
                    <form style={{ margin: '40px' }}>
                        <label htmlFor="origin">City:</label><br/>

                        <input type='text' name='City' placeholder='City Name' className='lombu' />
                        <br/>
                        <label htmlFor="city">Destination:</label><br/>
                        <input type='text' name='destination' placeholder='Destination' className='lombu'/>
                        <br />
                        <br />
                        <input type='date' placeholder='From' />
                
                        <input type='date' placeholder='To' />
                        <br />
                        <br />
                        <Link to="/hotel"><Button variant="success"  className='lombu'>Start Booking </Button></Link>
                    </form>

                    
                    


                </div>


            </div>

                </div>
     
    );
};


export default Booking;