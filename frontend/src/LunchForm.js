import './Inscription.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextInput from "./TextInput";
import {useState} from "react";
import DateInput from "./DateInput";
import SelectInput from "./SelectInput"

const LunchForm = () => {
    const [restaurant, setRestaurant] = useState("");
    const [leaveTime, setLeaveTime] = useState("");
    const [bookingTime, setBookingTime] = useState("");
    const [type, setType] = useState("on_site");
    const onButtonClick = () => {
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
                type={"select"}
                value={type}
                setValue={setType}
            />
            <Button variant="contained" onClick={onButtonClick}>Valider</Button>
        </div>
    );
}

export default LunchForm;