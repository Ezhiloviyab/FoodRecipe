import './footer.css'
import{PiFacebookLogoBold,PiInstagramLogoBold}from 'react-icons/pi'
import{RiTwitterXFill}from'react-icons/ri'
export default function Footer(){
    return (
        <div className="footer container-fluid">
            <div className="footer-section">
                <p className="title">FoodiesHub.com</p>
                <p>FoodiesHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free.</p>
                <p>&copy; 2021 | All Rights Reserved</p>
            </div>
            <div className="footer-section">
                <p className="title">Contact Us</p>
                <p>foodieshub@gmail.com</p>
                <p>+342-5324-9454</p>
                <p>2393 Street NYC</p>
            </div>
            <div className="footer-section">
                <p className="title">Socials</p>
                <p ><PiFacebookLogoBold className='mx-2'/>Facebook</p>
                <p><RiTwitterXFill className='mx-2'/>Twitter</p>
                <p><PiInstagramLogoBold className='mx-2'/>Instagram</p>
            </div>
        </div>
    )
}