import React, { useState, useEffect } from 'react';
import './Cacti.scss';
import axios from 'axios';
import CactiList from './CactiList';
import Nav from '../Nav/Nav';

const Cacti = () => {
  const [cacti, setCacti] = useState([]);

  useEffect(() => {
    getCacti();
  }, []);

  const getCacti = () => {
    axios.get(`/api/cacti`).then((res) => setCacti(res.data));
  };

  const mappedCacti = cacti.map((element) => {
    return (
      <CactiList
        cactiListing={element}
        key={element.id}
        name={element.name}
        price={element.price}
        image={element.img}
      />
    );
  });
  return (
    <div>
      <Nav />
      <h2>Cacti</h2>
      <div className="mapped-cacti-container">{mappedCacti}</div>
    </div>
  );
};

export default Cacti;
