/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './Flat.module.css';
import { likeFlat, dislikeFlat } from '../../services/actions';

function Flat({
  id, attributes, relationships, liked,
}) {
  const dispatch = useDispatch();
  const toggleLike = (id) => {
    // eslint-disable-next-line no-unused-expressions
    liked ? dispatch(dislikeFlat(id)) : dispatch(likeFlat(id));
  };
  return (
    <div className={styles.flat}>
      <p className={styles.title}>{attributes.title}</p>
      <div className={styles.ttx}>
        <p className={styles.text}>{`Количество комнат: ${attributes.rooms}`}</p>
        <p className={styles.text}>{`Площадь: ${attributes.area} ${attributes.unit}`}</p>
      </div>
      <div className={styles.address}>
        <p className={styles.text}>
          {`Адрес: ул.${attributes.address.street} дом ${attributes.address.house} кв. ${attributes.address.room}`}
        </p>
      </div>
      <p className={styles.text}>
        {`Агент: ${relationships.attributes.first_name} ${relationships.attributes.middle_name} ${relationships.attributes.last_name}`}
      </p>
      <button className={`${styles.button_like} ${liked ? styles.button_like_active : ''}`} aria-label="like" type="button" onClick={() => toggleLike(id)} />
    </div>
  );
}

export default Flat;
