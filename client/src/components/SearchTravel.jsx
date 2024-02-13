import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './comp.css'
<<<<<<< HEAD
import DatePicker from 'react-datepicker'; // Import DatePicker component
=======
import DatePicker from 'react-datepicker';
>>>>>>> 881bc7959a99de164279c0afabbb9d961c19994f
import 'react-datepicker/dist/react-datepicker.css';

const SearchTravel = () => {
  const [inputValueFrom, setInputValueFrom] = useState('');
  const [inputValueTo, setInputValueTo] = useState('');
  const [trains, setTrains] = useState([]);
  const [fares, setFare] = useState([]);
  const [selectedTrain, setSelectedTrain] = useState(null);
  const [searchClicked, setSearchClicked] = useState(false);
  const [dateSearched, setDate] = useState(null)
  const [inputValue, setInputValue] = useState('');
  const [suggestionsFrom, setSuggestionsFrom] = useState([]);
  const [selectedSuggestionFrom, setSelectedSuggestionFrom] = useState(null);
  const [suggestionsTo, setSuggestionsTo] = useState([]);
  const [selectedSuggestionTo, setSelectedSuggestionTo] = useState([]);
<<<<<<< HEAD
=======
  const [seat, setSeat] = useState([]);
>>>>>>> 881bc7959a99de164279c0afabbb9d961c19994f

  const onChangeFrom = async (e) => {
    const value = e.target.value;
    setInputValueFrom(value);
    try {
<<<<<<< HEAD
      const response = await fetch(`http://localhost:3001/book/station/search?name=${value}`, {
=======
      // const dateSend = dateSearched ? dateSearched : new Date();
      const dateReceived = new Date('dateSearched');

      const response = await fetch(`http://localhost:3001/book/station/search?name=${value}&date=${dateReceived}`, {
>>>>>>> 881bc7959a99de164279c0afabbb9d961c19994f
        method: "GET",
      });

      const res = await response.json();
      const received = res.data.result;
<<<<<<< HEAD
      console.log(received);
=======
      // console.log(received);
      // const allInfo = res.data;
      // console.log(allInfo);
>>>>>>> 881bc7959a99de164279c0afabbb9d961c19994f
      if (Array.isArray(received)) {
        setSuggestionsFrom(received.map((item) => item.station_name));
      } else {
        setSuggestionsFrom([]);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const onChangeTo = async (e) => {
    const value = e.target.value;
    setInputValueTo(value);
    try {
      const response = await fetch(`http://localhost:3001/book/station/search?name=${value}`, {
        method: "GET",
      });

      const res = await response.json();
<<<<<<< HEAD
      const received = res.data.result;
      console.log(received);
=======
      const r = res.data.info;
      console.log(r);
      const received = res.data.result;
      // console.log(received);
      const allInfo = res.data.info;
      console.log(allInfo);
>>>>>>> 881bc7959a99de164279c0afabbb9d961c19994f
      if (Array.isArray(received)) {
        setSuggestionsTo(received.map((item) => item.station_name));
      } else {
        setSuggestionsTo([]);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const onSelectSuggestionFrom = (selectedSuggestion) => {
    setInputValueFrom(selectedSuggestion);
    setSelectedSuggestionFrom(selectedSuggestion);
    setSuggestionsFrom([]);
  };

  const onSelectSuggestionTo = (selectedSuggestion) => {
    setInputValueTo(selectedSuggestion);
    setSelectedSuggestionTo(selectedSuggestion);
    setSuggestionsTo([]);
  };

  const onSearchFunc = async () => {
    try {
      setSearchClicked(true);
      const response = await fetch(
        `http://localhost:3001/book/search?from=${inputValueFrom}&to=${inputValueTo}&date=${dateSearched}`,
        {
          method: 'GET',
        }
      );

      const res = await response.json();
      const received = res.data.result;
      const received2 = res.data.result2;
<<<<<<< HEAD
      // console.log(received);
      // console.log(received2);
      if (Array.isArray(received)) {
        setTrains(received);
        setFare(received2);
        console.log(received2);
=======
      const allInfo = res.data.info;
    //  console.log(allInfo);
      // console.log(received);
      // console.log(received2);
      if (Array.isArray(received)) {
        console.log(received+".......................");
        setTrains(received);
        console.log(trains.length);
        setFare(received2);
        setSeat(allInfo);
        // console.log(received2);
>>>>>>> 881bc7959a99de164279c0afabbb9d961c19994f
      } else {
        setTrains([]);
        setFare([]);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleTrainClick = (train) => {
    setSelectedTrain(selectedTrain === train ? null : train);
  };

  const ReviewButton = ({ trainId, classId }) => (
    <Link to={`/review?trainId=${trainId}&classId=${classId}`} className="review-button">
      Review
    </Link>
  );

  return (
    <Fragment>
      <div>
        <div className="input-container">
          <label htmlFor="from" className="label">From: </label>
          <input
            type="text"
            id="from"
            onChange={onChangeFrom}
            value={inputValueFrom}
            style={{
              width: '300px',
              marginRight: '10px',
              height: '40px',
              borderRadius: '5px', // Adjust this value to increase or decrease the corner roundness
              border: '2px solid darkgreen' // Specifies the border width, style, and color
            }}
          />
        </div>
        <div className="input-container">
          <label htmlFor="to" className="label">To: </label>
          <input
            type="text"
            id="to"
            onChange={onChangeTo}
            value={inputValueTo}
            style={{
              width: '300px',
              marginRight: '10px',
              height: '40px',
              borderRadius: '5px', // Adjust this value to increase or decrease the corner roundness
              border: '2px solid darkgreen' // Specifies the border width, style, and color
            }}
          />
        </div>
        <div className="drop-down-from">
          {
            suggestionsFrom.map((item, index) => (
              <div key={index} onClick={() => onSelectSuggestionFrom(item)}>
                {item}
                <hr />
              </div>
            ))
          }
        </div>
        <div className="drop-down-to">
          {
            suggestionsTo.map((item, index) => (
              <div key={index} onClick={() => onSelectSuggestionTo(item)}>
                {item}
                <hr />
              </div>
            ))
          }
        </div>
        <div className="input-container" >
          {/* <input type="text" className='form-control' placeholder='Date of birth' value={date_of_birth} onChange={e => setDob(e.target.value)} /> */}
          {/* <DatePicker selected={date_of_birth} onChange={(e) => setDob(e.target.value)} /> */}
          <label htmlFor="from" className="label">Pick Date: </label>
          <DatePicker wrapperClassName="datePicker" className='form-control' placeholderText='Date of Journey'
            showIcon
            selected={dateSearched}
            onChange={(date) => setDate(date)}
            dateFormat='dd/MM/yyyy'

          />
        </div>

        <button onClick={onSearchFunc} className="search-button">search</button>
        {searchClicked && fares.length === 0 && (
          <div className='not found mt-5'>
            <h5>No trains found !</h5>
          </div>
        )}
      </div>
      {fares.length > 0 && (
        <div className="train-container mt-5">
          {trains.map((train, index) => (
            <Fragment key={index}>
              <div
                className="train hoverable"
                style={{ cursor: 'pointer', padding: '10px', marginBottom: '5px' }}
                onClick={() => handleTrainClick(train)}
              >
                <div><h4> {train.train_id} <span style={{ margin: '0 25px' }}></span>  {train.train_name}</h4></div>
<<<<<<< HEAD

              </div>
              {selectedTrain === train && (
                <div className="class-cards-container">

=======
                <ReviewButton trainId={train.train_id} classId={train.class_id} />
              </div>
              {selectedTrain === train && (
                <div className="class-cards-container">
>>>>>>> 881bc7959a99de164279c0afabbb9d961c19994f
                  {fares
                    .filter(f => f.train_id === train.train_id)
                    .map((f, index) => (
                      <div key={index} className="class-card">
<<<<<<< HEAD
                        <div>{f.class_name}<span style={{ margin: '0 25px' }}></span>  <ReviewButton trainId={train.train_id} classId={f.class_id} /></div>
                        <div><strong>Fare:</strong> {f.fare} Tk.</div>
                      </div>
                    ))}
                </div>

=======
                        <div>{f.class_name}</div>
                        <div><strong>Fare:</strong> {f.fare} Tk.</div>
                        <div><strong>Seat Count:</strong> {seat.find(seatInfo => seatInfo.train_id === train.train_id && seatInfo.class_id === f.class_id)?.available_seats_count}</div>
                      </div>
                    ))}
                </div>
>>>>>>> 881bc7959a99de164279c0afabbb9d961c19994f
              )}
            </Fragment>
          ))}
        </div>
      )}
<<<<<<< HEAD
=======

>>>>>>> 881bc7959a99de164279c0afabbb9d961c19994f
    </Fragment>
  );

};

export default SearchTravel;
