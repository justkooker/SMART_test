import React from "react";
import { setFilterType } from "../../../redux/features/filterSlice";
import { useDispatch } from "react-redux";

import s from "./SearchbarTypes.module.scss";

const SearchbarTypes = () => {
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterType(event.target.value));
  };
  return (
    <div className={s.container}>
       <span>Search by</span>
      <label>
        Name
        <input
          type="radio"
          name="types"
          value="name"
          onChange={handleChange}
        />
      </label>
      <label>
        Username
        <input
          type="radio"
          name="types"
          value="username"
          onChange={handleChange}
        />
      </label>
      <label>
        Email
        <input
          type="radio"
          name="types"
          value="email"
          onChange={handleChange}
        />
      </label>
      <label>
        Phone
        <input
          type="radio"
          name="types"
          value="phone"
          onChange={handleChange}
        />
      </label>
     
    </div>
  );
};

export default SearchbarTypes;
