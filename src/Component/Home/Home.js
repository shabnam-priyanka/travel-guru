import React from 'react';
import Header from '../Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Button} from 'react-bootstrap';
import { Link, useParams} from "react-router-dom";
import sajek from '../../Image/Sajek.png';
import sundorbon from '../../Image/sundorbon.png';
import sreemongol from '../../Image/Sreemongol.png';
// import image from '../../Image/back.png'



const fakeData =  [
    {
        id: 0,
        name: "Cox's Bazar",
        details: "Cox's Bazar is located 150 km (93 mi) south of the divisional headquarter city of Chittagong. ... The beach in Cox's Bazar has a gentle slope and with an unbroken length of 155 km (96 mi) it is often termed the 'longest natural unbroken sea beach' in the world.",
        img: sajek
    },
    {
        id: 1,
        name: "Sundarban",
        details: "The Sundarbans mangrove forest, one of the largest such forests in the world (140,000 ha), lies on the delta of the Ganges, Brahmaputra and Meghna rivers on the Bay of Bengal. It is adjacent to the border of India's Sundarbans World Heritage site inscribed in 1987.",
        img: sundorbon
    },
    {
        id: 2,
        name: "Sreemangal",
        details: "Sreemangal is situated in Moulvibazar district in sylhet division. Sreemangal is an Upazila. It is famous for tea garden. Rain all time occurs here. Nature has adorned sreemangal with green tress. Its natural scenery is very charming. It soothes one’s eyes. Birds are twittering always here. The first tea garden in Bangladesh which names “Malni chho ra tea garden” is here. Only one tea research institute in Bangladesh which name is BTRI (Bangladesh Tea Research Institute) is situated in Sreemangal. The terraced tea gardens, plantations and evergreen hills of sreemangal are wonderful treats for the tourists. ",
        img: sreemongol
    }
    
]


const Home = () => {

    
        const {id} = useParams();
    // const bookingClick = (event) => {
    //     let book = event.target.id;
    // }
    return (

        <div className='background'>
            {/* <Header></Header> */}
            {/* <img className="back " src={image} alt="" /> */}
            <div>
                <div className=' para'>
                    <h1>{fakeData[1].name} </h1>
                    <p>{fakeData[1].details} </p>
                    
                <br/>
                <Link to={"/booking/"+1}><Button variant="success">Booking {id} </Button></Link>
            
                </div>

                <div className=' image' >
                    <img id='0' src={sajek} alt="" srcset=""/>
                    <img id='1' src={sundorbon} alt="" srcset=""/>
                    <img id='2' src={sreemongol} alt="" srcset=""/>

                </div>

            
            </div>

        </div>
    );
};

export default Home;