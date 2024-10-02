import react from 'react';
import { BrowserRouter, Navigate, Route, Router } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './pages/NotFound';

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route
          path="/"
          component={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" component={<Login />} />
        <Route path="/register" component={<Register />} />
        <Route path="*" component={<NotFound />} />
      </Router>
    </BrowserRouter>
  );
}

export default App;
