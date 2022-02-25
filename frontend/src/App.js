import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Inscription from "./Inscription/Inscription";
import Connection from "./Connection/Connection";
import LunchList from "./LunchList/LunchList";
import LunchForm from "./LunchForm";
import CreateLunch from "./CreateLunch/CreateLunch";
import CreateRestaurant from "./CreateRestaurant/CreateRestaurant";
import LandingPage from "./LandingPage/LandingPage";

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
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/subscription" />}/>
                    <Route path="/connection" element={ <Connection/>}/>
                    <Route path="/subscription" element={ <Inscription/>}/>
                    <Route path="/listing-lunches" element={ <LunchList lunches={testData}/>}/>
                    <Route path="/create-lunch" element={ <LunchForm />}/>
                    <Route path="/create-restaurant" element={ <CreateRestaurant/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
