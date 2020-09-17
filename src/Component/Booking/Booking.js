import React from 'react';
import './Booking.css';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";






const Booking = () => {

    return (


        <div className='container'>

            <div className='col=md-6'>
                <div className='booking1 '>
                    <h1 style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ex.</h1>

                </div>

                <div className='col-md-6 booking2'>
                    <form style={{ margin: '40px' }}>
                        <label for="birthday">City:</label><br/>

                        <input type='text' name='City' placeholder='City Name' className='lombu' />
                        <br/>
                        <label for="city">Destination:</label><br/>
                        <input type='text' name='destination' placeholder='Destination' className='lombu'/>
                        <br />
                        <br />
                        <input type='date' placeholder='From' />
                
                        <input type='date' placeholder='To' />
                        <br />
                        <br />
                        <Link to="/login"><Button variant="success"  className='lombu'>Start Booking </Button></Link>
                    </form>

                    {/* <form>
                    <label for="birthday">Birthday:</label>
                    <input type="date" id="birthday" name="birthday"/>
                    </form> */}


                </div>


            </div>

                </div>
     
    );
};


export default Booking;