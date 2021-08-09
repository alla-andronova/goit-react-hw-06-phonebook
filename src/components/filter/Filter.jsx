import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { filter } from '../../redux/slices/filter';
import s from './Filter.module.css';

function Filter() {
  const filterValue = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(filter(e.currentTarget.value));
  };
  return (
    <>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={filterValue}
          onChange={e => handleFilter(e)}
        />
      </label>
    </>
  );
}

export default Filter;
