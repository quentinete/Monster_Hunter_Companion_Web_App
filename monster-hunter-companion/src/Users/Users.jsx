import { Routes, Route, Link } from 'react-router-dom';
import Profile from './access/Profile';
import Settings from './access/Settings';

export default function Users() {
    return (
      <div>
        <h2>Tableau de bord</h2>
        <nav>
          <Link to="profile">Profil</Link> | 
          <Link to="settings">Paramètres</Link>
        </nav>
  
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    );
  }