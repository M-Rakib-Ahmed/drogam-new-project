import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-base-200 p-2">
         <p className="bg-[#D72050] text-white px-3 py-2">Latest</p>
         <Marquee speed={50} pauseOnHover={true} className="space-x-10">
                <Link to={'/news'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus repudiandae, neque eum quo tenetur, dolor iste quis illo blanditiis beatae? Debitis ut Lorem ipsum dolor sit amet. fuga .</Link>
                <Link to={'/news'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus repudiandae, neque eum quo tenetur, dolor iste quis illo blanditiis beatae? Debitis ut Lorem ipsum dolor sit amet. fuga .</Link>
                <Link to={'/news'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatibus repudiandae, neque eum quo tenetur, dolor iste quis illo blanditiis beatae? Debitis ut Lorem ipsum dolor sit amet. fuga .</Link>
         </Marquee>
        </div>
    );
};

export default LatestNews;