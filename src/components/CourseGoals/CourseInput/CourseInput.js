import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (enteredValue.trim().length > 0) {
      setIsValid(true);
      // enterValue의 문자열 길이가 0보다 크면, isValid = true로 만들어서 원래 CSS 속성으로 돌려줄 것
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
      // trim()은 공백 제거 메서드 
      // enteredValue의 문자열 길이가 0이라면 return으로 함수 실행 종료
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
