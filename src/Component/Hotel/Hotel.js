import React from 'react';
import './Hotel.css';
import hotelData from '../FakeData/HotelData';






const Hotel = () => {


    return (

        <div className='d-flex'>
            <div >
                {
                    hotelData.map(hd =>
                        <div className="card mb-3" style={{ maxWidth: '840px',margin:'0%' }}>
                            <div className="row no-gutters">
                                <div className="col-md-6">
                                    <img src={hd.img} style={{height:'355px'}}  className="card-img" alt="..." />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="card-title">{hd.name} </h5>
                                        <p className="card-text">{hd.details} </p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1885735.158239781!2d90.13871043689774!3d22.61361901427402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sdhaka!3m2!1d23.810332!2d90.4125181!4m5!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2scox&#39;s%20bazar!3m2!1d21.4272283!2d92.0058074!5e0!3m2!1sen!2sca!4v1600461913361!5m2!1sen!2sca" width="500" height="750" frameBorder="0" style={{ border: 0,marginLeft:'130px' }} allowFullScreen="" ariaHidden="false" tabIndex="0"></iframe>
        </div>

    );
};

export default Hotel;