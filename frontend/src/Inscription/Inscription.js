import './Inscription.css';
import Button from '@mui/material/Button';
import TextInput from "../TextInput";
import {useState} from "react";
import axios from 'axios';

const Inscription = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [team, setTeam] = useState("");
    const onButtonClick = () => {
        const user = {
            mail,
            password,
            firstName,
            lastName,
        }
        // TODO Add team in model and here
        axios.post(`/api/users`, { user })
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
                value={mail}
                setValue={setMail}
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