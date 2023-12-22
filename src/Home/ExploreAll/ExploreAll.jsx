import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { FaUserDoctor } from "react-icons/fa6";
import { GoLaw } from "react-icons/go";
import { GiTeacher } from "react-icons/gi";
import { FcEngineering } from "react-icons/fc";

const ExploreAll = () => {
    return (
        <div>
            <SectionTitle heading={"Explore All Beneficieries"}></SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mx-auto'>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                       
                        <FaUserDoctor className="rounded-xl text-[150px] text-yellow-400"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-4xl">Doctors</h2>
                        <p>Doctors optimize patient care and reduce administrative burdens by utilizing task management platforms to organize appointments and streamline communication</p>
                        
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                       
                        <GoLaw className="rounded-xl text-[150px] text-orange-400"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-4xl">Advocates</h2>
                        <p>Advocates can enhance their workflow and client interactions by leveraging task management platforms to efficiently organize case-related activities and communication</p>
                        
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                       
                        <GiTeacher className="rounded-xl text-[150px] text-blue-400"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-4xl">Teachers</h2>
                        <p>Teachers can streamline lesson planning, grading, and communication with students using task management platforms, enhancing overall classroom efficiency</p>
                        
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                       
                        <FcEngineering className="rounded-xl text-[150px] text-yellow-400"/>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-4xl">Engineers</h2>
                        <p>Engineers can improve project coordination and task tracking, ensuring efficient collaboration and timely completion of assignments, through the use of task management platforms</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreAll;