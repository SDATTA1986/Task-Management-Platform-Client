
import { NavLink } from 'react-router-dom';
import banner from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="sm:max-w-md md:max-w-full">
                        <h1 className="mb-5 text-5xl font-bold uppercase">Task Management Platform</h1>
                        <p className="mb-5 w-1/2 mx-auto">Effortlessly manage tasks and boost productivity with our intuitive task management website. Streamline collaboration, set priorities, and meet deadlines with ease. Take control of your projects and achieve success seamlessly</p>
                        <NavLink  className="btn btn-primary" to='/login'>Let's Explore</NavLink >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;