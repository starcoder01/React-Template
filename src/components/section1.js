import { FaItunesNote } from "react-icons/fa";
const Section1 = () => {
    return (
        <div className="Section1">
            <div><FaItunesNote className="icon"/></div>
            <div className="holder">
                <input type="text" placeholder="Search your favourite movies" />
            </div>
        </div>
    );
}

export default Section1;