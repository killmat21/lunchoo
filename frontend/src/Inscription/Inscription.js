import './Inscription.css';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextInput from "../TextInput";
import {useState} from "react";
import axios from 'axios';
import SubHeader from "../SubHeader/SubHeader";
import Card from '@mui/material/Card';
import UploadPhoto from "../UploadPhoto/UploadPhoto";

const Inscription = () => {
    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [team, setTeam] = useState("");
    const [formError, setFormError] = useState(false);
    async function onButtonClick() {
        const user = {
            email,
            password,
            first_name: firstName,
            last_name: lastName,
            team_role: team,
            photo: "https://google.com",
        }
        // TODO Add team in model and here
        await axios.post(`http://127.0.0.1:8000/user/`, user)
          .then(res => {
            console.log(res);
            console.log(res.data);
            localStorage.setItem("user_id", res.data.id)
            localStorage.setItem("user_name", firstName)
            navigate(`/listing-lunches`);
          }).catch(function(error) {
              setFormError(true)
            });
    }

    return (
        <>
            <SubHeader
                title="Hello 👋🏻"
                subtitle="Please fill the form to continue :)"
            />
            <div className="inscription">
                <UploadPhoto />
                <div className="inscription_wrapper">
                    <TextInput
                        label={"E-mail Address"}
                        type={"text"}
                        value={email}
                        setValue={setEmail}
                        required
                    />
                    <TextInput
                        label={"Password"}
                        type={"password"}
                        value={password}
                        setValue={setPassword}
                        required
                    />
                    <TextInput
                        label={"First Name"}
                        type={"text"}
                        value={firstName}
                        setValue={setFirstName}
                        required
                    />
                    <TextInput
                        label={"Last Name"}
                        type={"text"}
                        value={lastName}
                        setValue={setLastName}
                        required
                    />
                    <TextInput
                        label={"Team"}
                        type={"text"}
                        value={team}
                        setValue={setTeam}
                        required
                    />
                </div>
            </div>
            <Button
                className="validationButton"
                variant="contained"
                onClick={onButtonClick}
                sx={{width: '700px', background: '#FF9014', right: '313px'}}
            >
                Register
            </Button>
            {formError && (
                <p className="formError">Error : please fill all fields</p>
            )}
        </>
    );
}

export default Inscription;