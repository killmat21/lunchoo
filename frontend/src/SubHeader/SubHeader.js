import './SubHeader.css'

const SubHeader = ({ title, subtitle }) => {
    return (
        <div className="subheader">
            <div className="subheader-title">{title}</div>
            <div className="subheader-subtitle">{subtitle}</div>
        </div>
    );
}

export default SubHeader;