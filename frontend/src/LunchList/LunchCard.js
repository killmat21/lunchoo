import axios from "axios";
import './LunchCard.css';
import Button from '@mui/material/Button';
import person from './person.png'

const onJoinGroupClick = (lunch_id, setLunches) => {
    const join = {
        user: localStorage.getItem("user_id"),
        lunch: lunch_id
    }
    axios.post(`http://127.0.0.1:8000/lunch_subscribe/`, join)
          .then(res => {
              console.log(res);
              console.log(res.data);
              axios.get("http://127.0.0.1:8000/lunch/")
              .then(response => {
                  setLunches([])
                  setLunches(response.data.lunches)
              });
          })
}

const LunchCard = ({lunch, setLunches}) => {
    const user_id = localStorage.getItem('user_id');
    let user_already_subscribed = false;
    for (const user of lunch.users) {
        if (user.id == user_id) {
            user_already_subscribed = true;
            break;
        }
    }

    return (
        <div className="lunchCard">
            <p className="restaurantName"><span>🍕</span> {lunch.place}</p>
            <p className="time">{lunch.departure_date}</p>
            <div className="lunchParticipantsList">
                <p>{lunch.users.length}/{lunch.number_places} people going</p>
                {lunch.users.map(participant => (
                    <img src={person} alt=""/>
                ))}
                {lunch.users.length < lunch.number_places && !user_already_subscribed &&
                    <Button className="joinGroupButton" onClick={() => onJoinGroupClick(lunch.id, setLunches)}>Join Group</Button>
                }
            </div>
        </div>
    );
}

export default LunchCard;