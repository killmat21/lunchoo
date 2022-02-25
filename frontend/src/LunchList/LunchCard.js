const LunchCard = ({lunch}) => {
    return (
        <div className="lunchCard">
            <p>Restaurant name: {lunch.restaurant}</p>
            <p>Departure date: {lunch.departureDate}</p>
            <p>Booking date: {lunch.bookingDate}</p>
            <p>Type: {lunch.type}</p>
            <div className="lunchParticipantsList">
                <p>Lunchers :</p>
                <ul>
                    {lunch.participantsList.map(participant => (
                        <li className="lunchParticipant">
                           <p className="lunchParticipantName">{participant.first_name} {participant.last_name}</p>
                            <img src={participant.image} alt={participant.first_name + " " + participant.last_name}/>
                        </li>
                    ))}
                </ul>

            </div>
            <button>You son of a bitch, I'm in !</button>
        </div>
    );
}

export default LunchCard;