import './App.css';
import Inscription from "./Inscription";
import LunchList from "./LunchList";
import LunchForm from "./LunchForm";

const App = () => {
    const testData = [
        {
            restaurant: "toto",
            departureDate: "25/02/2022 12:00",
            bookingDate: "25/02/2022 11:30",
            type: "To go",
            participantsList: [
                {
                    first_name: "Paulo",
                    last_name: "La Brute",
                    image: "",
                },
                {
                    first_name: "Kiyane",
                    last_name: "Mbappe",
                    image: "",
                },
                {
                    first_name: "Natasha",
                    last_name: "Le Blond",
                    image: "",
                },
            ]
        },
        {
            restaurant: "titi",
            departureDate: "25/02/2022 12:30",
            bookingDate: "25/02/2022 11:45",
            type: "To go",
            participantsList: [
                {
                    first_name: "Paulo",
                    last_name: "La Brute",
                    image: "",
                },
                {
                    first_name: "Natasha",
                    last_name: "Le Blond",
                    image: "",
                },
            ]
        }
    ]

    return (
        <div className="App">
            {/*<Inscription />*/}
            {/*<LunchList*/}
            {/*    lunches={testData}*/}
            {/*/>*/}
            <LunchForm />
        </div>
    );
}

export default App;
