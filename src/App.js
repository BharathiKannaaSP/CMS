import './App.css';
import UserForm from './UserForm';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeaveForm from './LeaveForm';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<UserForm />} />
        <Route path='/leaveform' element={<LeaveForm />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
