import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './App.module.css';
import FlatList from '../FlatList/FlatList';
import { fetchFlats } from '../../services/actions';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchFlats());
  }, []);
  return (
    <div className={styles.app}>
      <header className={styles.app__header} />
      <main className={styles.main}>
        <FlatList />
      </main>
    </div>
  );
}

export default App;
