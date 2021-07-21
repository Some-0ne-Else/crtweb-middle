import React from 'react';
import { useSelector } from 'react-redux';
import Flat from '../Flat/Flat';
import styles from './FlatList.module.css';

function FlatList() {
  const flats = useSelector((state) => state.flats);
  return (
    <div className={styles.flatlist}>
      {flats.map((el) => (
        <Flat
          key={el.id}
          id={el.id}
          attributes={el.attributes}
          relationships={el.relationships}
          liked={el.liked}
        />
      ))}
    </div>
  );
}

export default FlatList;
