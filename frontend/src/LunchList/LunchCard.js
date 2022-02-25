import './LunchCard.css';
import Button from '@mui/material/Button';
import person from './person.png'

const onJoinGroupClick = (lunch) => {
    // TODO take lunch.id and make call
}

const LunchCard = ({lunch}) => {
    return (
        <div className="lunchCard">
            <p className="restaurantName"><span>🍕</span> {lunch.place}</p>
            <p className="time">{lunch.departure_date}</p>
            <div className="lunchParticipantsList">
                <p>{lunch.users.length} people going</p>
                {lunch.users.map(participant => (
                    <img src={person} alt=""/>
                ))}
                <Button className="joinGroupButton" onClick={onJoinGroupClick(lunch.id)}>Join Group</Button>
            </div>
        </div>
    );
}

export default LunchCard;