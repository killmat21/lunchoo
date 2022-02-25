import './Inscription.css';
import Button from '@mui/material/Button';
import TextInput from "../TextInput";
import {useState} from "react";
import axios from 'axios';

const Inscription = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [team, setTeam] = useState("");
    const onButtonClick = () => {
        const user = {
            email,
            password,
            first_name: firstName,
            last_name: lastName,
            team_role: team,
            photo: "https://google.com",
        }
        // TODO Add team in model and here
        axios.post(`http://127.0.0.1:8000/user/`, user)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
        console.log(firstName, lastName, team)
    }

    return (
        <div className="inscription">
            <TextInput
                label={"E-mail"}
                type={"text"}
                value={email}
                setValue={setEmail}
            />
            <TextInput
                label={"Mot de passe"}
                type={"password"}
                value={password}
                setValue={setPassword}
            />
            <TextInput
                label={"Prénom"}
                type={"text"}
                value={firstName}
                setValue={setFirstName}
            />
            <TextInput
                label={"Nom"}
                type={"text"}
                value={lastName}
                setValue={setLastName}
            />
            <TextInput
                label={"Team"}
                type={"text"}
                value={team}
                setValue={setTeam}
            />
            <Button variant="contained" onClick={onButtonClick}>Valider</Button>
        </div>
    );
}

export default Inscription;