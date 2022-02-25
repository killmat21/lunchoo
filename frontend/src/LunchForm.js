import './Inscription/Inscription.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextInput from "./TextInput";
import {useState} from "react";
import DateInput from "./DateInput";
import SelectInput from "./SelectInput"
import axios from "axios";

const LunchForm = () => {
    const [restaurant, setRestaurant] = useState("");
    const [numberPlaces, setNumberPlaces] = useState("");
    const [leaveTime, setLeaveTime] = useState("");
    const [bookingTime, setBookingTime] = useState("");
    const [type, setType] = useState("ON_SITE");
    const onButtonClick = () => {
        const lunch = {
            place: restaurant,
            departure_date: leaveTime,
            book_limit_date: bookingTime,
            number_places: numberPlaces,
            type: type,
            user_id: localStorage.getItem("user_id"),
        }
        axios.post(`http://127.0.0.1:8000/lunch/`, lunch)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
        console.log(restaurant, leaveTime, bookingTime, type)
    }

    return (
        <div className="inscription">
            <TextInput
                label={"Restaurant"}
                type={"text"}
                value={restaurant}
                setValue={setRestaurant}
            />
            <TextInput
                label={"Nombre de personnes max"}
                type={"text"}
                value={numberPlaces}
                setValue={setNumberPlaces}
            />
            <DateInput
                label={"Heure de départ"}
                type={"text"}
                value={leaveTime}
                setValue={setLeaveTime}
            />
            <DateInput
                label={"Heure de réservation"}
                type={"text"}
                value={bookingTime}
                setValue={setBookingTime}
            />
            <SelectInput
                label={"Type"}
                setValue={setType}
            />
            <Button variant="contained" onClick={onButtonClick}>Valider</Button>
        </div>
    );
}

export default LunchForm;