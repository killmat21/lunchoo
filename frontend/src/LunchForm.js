import './LunchForm.css';
import { useNavigate } from "react-router-dom";
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
    let navigate = useNavigate();

    const [restaurant, setRestaurant] = useState("");
    const [numberPlaces, setNumberPlaces] = useState(1);
    const [leaveTime, setLeaveTime] = useState(new Date('2020-01-01 12:00'));
    const onButtonClick = () => {
        const hours = leaveTime.getHours() + ':' + ("0" + leaveTime.getMinutes()).slice(-2);
        const lunch = {
            place: restaurant,
            departure_date: hours,
            number_places: numberPlaces,
            user_id: localStorage.getItem("user_id"),
        }
        axios.post(`http://127.0.0.1:8000/lunch/`, lunch)
          .then(res => {
            console.log(res);
            console.log(res.data);
            navigate(`/listing-lunches`);
          })
        console.log(restaurant, leaveTime, numberPlaces)
    }

    return (
        <>
            <SubHeader
                title="Want to propose a lunch? 🤗"
                subtitle="Please fill the form to continue :)"
            />
            <div className="lunch-form">
                <TextInput
                    label={"What's the name of the restaurant?"}
                    type={"text"}
                    value={restaurant}
                    setValue={setRestaurant}
                    sx={{width: '100%', marginBottom: '16px'}}
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
                    type={"number"}
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