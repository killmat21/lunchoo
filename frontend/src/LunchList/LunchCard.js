import './LunchCard.css';
import person from './person.png'

const onJoinGroupClick = (lunch) => {
    // TODO take lunch.id and make call
}

const LunchCard = ({lunch}) => {
    return (
        <div className="lunchCard">
            <p className="restaurantName"><span>🍕</span> {lunch.restaurant}</p>
            <p className="time">{lunch.departureDate}</p>
            <div className="lunchParticipantsList">
                <p>{lunch.participantsList.length} people going</p>
                {lunch.participantsList.map(participant => (
                    <img src={person} alt=""/>
                ))}
                <button onClick={onJoinGroupClick(lunch)}>Join group</button>
            </div>
        </div>
    );
}

export default LunchCard;