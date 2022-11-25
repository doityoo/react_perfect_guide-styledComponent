import React, { useState } from 'react';
import styled from 'styled-components'
import Button from '../../UI/Button/Button';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => (props.invalid ? 'red' : 'black')}
}

  & input {
  display: block;
  width: 100%;
  border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
  background: ${props => (props.invalid ? 'rgb(255, 178, 178)': 'transparent')};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

  & input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}
`

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
      {/* <formControl className={!isValid && 'invalid'}> 이렇게 사용할 수 있고, 아래 코드처럼 props를 사용해서 동적으로 가능하다  */}
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button> 
    </form>
  );
};

export default CourseInput;
