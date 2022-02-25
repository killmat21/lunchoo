import './LunchForm.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextInput from "./TextInput";
import {useState} from "react";
import DateInput from "./DateInput";
import SelectInput from "./SelectInput"
import axios from "axios";
import SubHeader from "./SubHeader/SubHeader";

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
            number_places: numberPlaces,
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
        <>
            <SubHeader
                title="Want to offer lunch? 🤗"
                subtitle="Please fill the form to continue :)"
            />
            <div className="lunch-form">
                <TextInput
                    label={"What's the name of the restaurant?"}
                    type={"text"}
                    value={restaurant}
                    setValue={setRestaurant}
                    sx={{width: '100%'}}
                    className="width-500"
                />
                <DateInput
                    label={"What Time ?"}
                    value={leaveTime}
                    setValue={setLeaveTime}
                    className="width-500"
                />
                <TextInput
                    label={"How many people do you want to invite?"}
                    type={"text"}
                    value={numberPlaces}
                    setValue={setNumberPlaces}
                    sx={{width: '100%'}}
                    className="width-500"
                />
            </div>
            <Button
                className="validationButton"
                variant="contained"
                onClick={onButtonClick}
                sx={{width: '700px', background: '#FF9014', right: '100px'}}
            >
                Add lunch event
            </Button>

        </>
    );
}

export default LunchForm;