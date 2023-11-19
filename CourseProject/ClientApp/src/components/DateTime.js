import React, { useState, useContext } from 'react';
import Datetime from 'react-datetime';
import AddPost from './Posts.js'
import 'react-datetime/css/react-datetime.css';

export const DateContext = React.createContext();

const DateTimeInput = () => {
    const [selectedDate, setSelectedDate] = useState(false);

    const handleDateChange = (date) => {
      setSelectedDate(date);
      AddPost(date);
    };
  
    return (
    <div>
      <DateContext.Provider value={selectedDate}>
      <Datetime
          value={selectedDate}
          onChange={handleDateChange}
          inputProps={{ placeholder: 'Выберите дату и время' }}
        />   
       </DateContext.Provider>
    </div>
    );
};


export default DateTimeInput;