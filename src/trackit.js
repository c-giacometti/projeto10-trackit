import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './login';
import CreateAccount from './createaccount';
import TodayView from './today-view';

export default function Trackit(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<CreateAccount />} />
                <Route path='/hoje' element={<TodayView />} />
                {/* <Route path='/habitos' element={<HabitTracker />} />
                <Route path='/historico' element={<HabitsHistory />} /> */}
            </Routes>
        </BrowserRouter>
    );

}