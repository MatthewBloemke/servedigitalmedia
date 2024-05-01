'use client';
import React, { useState, useEffect, useRef } from 'react';
import { send } from '@emailjs/browser';
import Alert from '@/components/Alert';
import Error from '@/components/Error';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

const initialState = {
  name: '',
  number: '',
  email: '',
  subject: '',
  message: '',
  secondUser: '',
};

const Page = () => {
  const [contactState, setContactState] = useState(initialState);
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const phoneLength = useRef(0);

  useEffect(() => {
    setError(false);
    setAlert(false);
    setContactState(initialState);
  }, []);

  const handleChange = ({ target }: any) => {
    if (target.name === 'number') {
      if (target.value.length === 3 && phoneLength.current === 2) {
        target.value = target.value + '-';
      } else if (target.value.length === 7 && phoneLength.current === 6) {
        target.value = target.value + '-';
      } else if (target.value.length === 8 && phoneLength.current === 9) {
        target.value = target.value.slice(0, -1);
      } else if (target.value.length === 4 && phoneLength.current === 5) {
        target.value = target.value.slice(0, -1);
      } else if (target.value.length === 4 && phoneLength.current === 3) {
        target.value = target.value.slice(0, 3) + '-' + target.value.slice(3);
      } else if (target.value.length === 8 && phoneLength.current === 7) {
        target.value = target.value.slice(0, 7) + '-' + target.value.slice(7);
      }
    }
    setContactState({
      ...contactState,
      [target.name]: target.value,
    });
    phoneLength.current = target.value.length;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(contactState);
    setDisabled(true);
    if (
      contactState.name === '' ||
      contactState.email === '' ||
      contactState.message === '' ||
      contactState.subject === '' ||
      contactState.number === ''
    ) {
      setError(true);
      setDisabled(false);
      return;
    } else if (contactState.number.length !== 12) {
      setError(true);
      setDisabled(false);
      return;
    }
    if (contactState.subject === 'web') {
      contactState.secondUser = 'mattbloemke@gmail.com';
    }
    send(
      'service_ne09bab',
      'template_ayev97b',
      contactState,
      'O_RJ2i4_VWfnQbVbv'
    ).then(
      (result) => {
        console.log(result.text);
        setAlert(true);
        setContactState(initialState);
      },
      (error) => {
        setError(true);
        console.log(error.text);
      }
    );
    setDisabled(false);
  };

  return (
    <div className="flex justify-center items-center relative">
      <div className=" w-full md:w-[80%] h-auto rounded-xl lg:p-4 mt-10">
        <div className="p-4">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4 w-full py-2 mt-5">
              <TextField
                variant="filled"
                label="Name"
                name="name"
                onChange={handleChange}
                value={contactState.name}
              />
              <TextField
                variant="filled"
                name="number"
                label="Phone Number"
                onChange={handleChange}
                value={contactState.number}
              />
            </div>
            <div className="flex flex-col py-2">
              <TextField
                variant="filled"
                name="email"
                label="Email"
                type="email"
                value={contactState.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col py-2">
              <FormControl>
                <InputLabel id="Subject">Subject</InputLabel>
                <Select
                  variant="filled"
                  value={contactState.subject}
                  labelId="Subject"
                  onChange={({ target }) =>
                    setContactState({ ...contactState, subject: target.value })
                  }
                >
                  <MenuItem value="">Select a subject</MenuItem>
                  <MenuItem value="general">General Inquiry</MenuItem>
                  <MenuItem value="web">Web Design</MenuItem>
                  <MenuItem value="branding">General Branding</MenuItem>
                  <MenuItem value="social">Social Media Promotion</MenuItem>
                  <MenuItem value="video">Video Production</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="flex flex-col py-2">
              <TextField
                name="message"
                label="Message"
                onChange={handleChange}
                variant="filled"
                multiline
                rows={4}
              />
            </div>
            <div className="w-full text-center mt-5">
              <Button variant="contained" type="submit">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
      {alert ? <Alert alert={alert} setAlert={setAlert} /> : null}
      {error ? <Error error={error} setError={setError} /> : null}
    </div>
  );
};

export default Page;
