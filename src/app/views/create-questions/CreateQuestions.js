import React, { useState } from "react";
import './CreateQuestions.scss';
import axios from 'axios';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CreateQuestions(props) {

  // const [theQuestion, setTheQuestion] = useState({
  //   'question': '',
  //   'A': '',
  //   'B': '',
  //   'C': '',
  //   'D': '',
  //   'answer': 'a'
  // });

  // function handleInputChange(e) {
  //   setTheQuestion({
  //     ...theQuestion,
  //     [e.target.name]: e.target.value
  //   });
  // }

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   axios.post('/createquestion', theQuestion).then(res => {
  //     console.log(res.data);
  //   }).catch(err => {
  //     console.log("IT DIDNT WORK");
  //   })
  // }

  return (
    <div>
      hello world
      {/* <Form>
        <Form.Label>Question</Form.Label>
        <Form.Control name="question" onChange={handleInputChange}></Form.Control>
        <Form.Label>Answer choice 1</Form.Label>
        <Form.Control name="A" onChange={handleInputChange}></Form.Control>
        <Form.Label>Answer Choice 2</Form.Label>
        <Form.Control name="B" onChange={handleInputChange}></Form.Control>
        <Form.Label>Answer Choice 3</Form.Label>
        <Form.Control name="C" onChange={handleInputChange}></Form.Control>
        <Form.Label>Answer Choice 4</Form.Label>
        <Form.Control name="D" onChange={handleInputChange}></Form.Control>

        <Button onClick={handleSubmit}>Submit Button</Button>
      </Form> */}
    </div>
    
  )
}

export default CreateQuestions;

