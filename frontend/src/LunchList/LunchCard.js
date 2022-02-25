import axios from "axios";
import './LunchCard.css';
import Button from '@mui/material/Button';
import person from './person.png'

const onJoinGroupClick = (lunch) => {
    const join = {
        user_id: localStorage.getItem("user_id"),
        lunch_id: lunch.id
    }
    axios.post(`http://127.0.0.1:8000/lunch_subscribe/`, join)
          .then(res => {
              console.log(res);
              console.log(res.data);
          })
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