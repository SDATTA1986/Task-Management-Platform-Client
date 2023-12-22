
import { FaTwitter,FaFacebookF,FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="mt-20">
            <footer className="footer footer-center p-5 flex flex-row-reverse justify-around text-white bg-black rounded">
              
                <nav>
                    <div className="grid grid-flow-col gap-4 text-2xl">
                    <a href="https://www.facebook.com/" target="_blank"><FaFacebookF></FaFacebookF></a>
                        <a href="https://twitter.com/" target="_blank"><FaTwitter></FaTwitter></a>

                        <a href="https://www.youtube.com/" target="_blank"><FaYoutube></FaYoutube></a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright &copy; 2023 - All right reserved </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;