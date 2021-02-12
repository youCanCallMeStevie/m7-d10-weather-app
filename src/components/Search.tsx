import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../store/actions/alertActions";
import {getWeather, setLoading} from "../store/actions/weatherActions"
interface SearchProps {
  title: string;
}
function Search({ title }: SearchProps) {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city.trim() === "") {
      return dispatch(setAlert("City is required"));
    }
    dispatch(setLoading());
    dispatch(getWeather(city));
    setCity("");
  };

  return (
    <div className="">
      <div className="">
        <div className="">
          <h1 className="">{title}</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={handleChange}
            />
            <button className="">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
