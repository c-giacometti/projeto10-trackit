import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'; 

import UserContext from './user-context';
import Login from './login';
import CreateAccount from './create-account';
import TodayView from './today-view';
import HabitTracker from './habit-tracker';
import HabitsHistory from './habits-history';

export default function Trackit(){

    const [userInfoObject, setUserInfoObject] = useState(null);
    const [todayHabitsArray, setTodayHabitsArray] = useState([]);
    const [doneHabits, setDoneHabits] = useState(0);
    const [userHabitsArray, setUserHabitsArray] = useState([]);

    return (
        <BrowserRouter>
            <UserContext.Provider value={
                {userInfoObject, setUserInfoObject, todayHabitsArray, setTodayHabitsArray, doneHabits, setDoneHabits,
                userHabitsArray, setUserHabitsArray}}
            >
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cadastro' element={<CreateAccount />} />
                    <Route path='/hoje' element={<TodayView />} />
                    <Route path='/habitos' element={<HabitTracker />} />
                    <Route path='/historico' element={<HabitsHistory />} /> 
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );

}