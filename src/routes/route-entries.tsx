import React from 'react';
import { HashRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Home from './Home/Home.page';
import Songs from './Songs/Songs.page';
import Band from './Band/Band.page';
import Contact from './Contact/Contact.page'

const RouteEntries: React.FC = () => {
  return (
        <Router>
            <Routes>
              <Route path="/" element={<Outlet/>}>
                <Route index element={<Home />} />
                <Route path="/songs" element={<Songs />} />
                <Route path="/band" element={<Band />} />
                <Route path="/contact" element={<Contact />} />
              </Route>
            </Routes>
        </Router>
  );
};

export default RouteEntries;