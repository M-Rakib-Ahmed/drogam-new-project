import moment from 'moment';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 py-2'>
          <div className="log">
            <img className='w-[300px]' src={logo} alt="" />
            <h2 className='text-gray-400 text-center'>journalism without  fear or  favour</h2>
                <p className='text-center'>{moment().format("dddd, MMMM Do YYYY")}</p>
          </div>
        </div>
    );
};

export default Header;