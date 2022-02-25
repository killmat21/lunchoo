import header from './Lunchoo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img
                src={header}
                alt={"Lunchoo Header"}
            />
        </div>
    );
}

export default Header;