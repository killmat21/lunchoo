import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Inscription from "./Inscription/Inscription";
import Connection from "./Connection/Connection";
import LunchList from "./LunchList/LunchList";
import LunchForm from "./LunchForm";
import CreateLunch from "./CreateLunch/CreateLunch";
import CreateRestaurant from "./CreateRestaurant/CreateRestaurant";
import LandingPage from "./LandingPage/LandingPage";
import Header from "./Header/Header";
import SubHeader from "./SubHeader/SubHeader";

const App = () => {
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/subscription" />}/>
                    <Route path="/connection" element={ <Connection/>}/>
                    <Route path="/subscription" element={ <Inscription/>}/>
                    <Route path="/listing-lunches" element={ <LunchList />}/>
                    <Route path="/create-lunch" element={ <LunchForm />}/>
                    <Route path="/create-restaurant" element={ <CreateRestaurant/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
