import './about-us.css';
import aboutUs from '../../assets/about-us-illustration.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from 'antd';

const AboutUs = () => {
    AOS.init()
    return(
        <div className="about-container" id="about-us">
            <div className='text-side' data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-out">
                <h2>About Us</h2>
                <p>Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.</p>

                <Button size='large' className='learn-btn btn'>
                    More
                </Button>
            </div>
            <div className="img-side" data-aos="fade-left" data-aos-duration="800" data-aos-easing="ease-in-out">
                <img src={aboutUs} alt='about-us' />
            </div>
        </div>
    );
}

export default AboutUs;