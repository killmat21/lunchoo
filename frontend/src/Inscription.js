import './Inscription.css';
import Button from '@mui/material/Button';
import TextInput from "./TextInput";
import {useState} from "react";

const Inscription = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [team, setTeam] = useState("");
    const onButtonClick = () => {
        console.log(firstName, lastName, team)
    }

    return (
        <div className="inscription">
            <TextInput
                label={"Prénom"}
                value={firstName}
                setValue={setFirstName}
            />
            <TextInput
                label={"Nom"}
                value={lastName}
                setValue={setLastName}
            />
            <TextInput
                label={"Team"}
                value={team}
                setValue={setTeam}
            />
            <Button variant="contained" onClick={onButtonClick}>Valider</Button>
        </div>
    );
}

export default Inscription;