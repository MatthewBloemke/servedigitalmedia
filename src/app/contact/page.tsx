'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import withSnackbar from '@/components/withSnackbar';

const initialState = {
  name: '',
  number: '',
  email: '',
  subject: '',
  message: '',
  secondUser: '',
};

const Page = ({ showSnackbar }: any) => {
  const [contactState, setContactState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const phoneLength = useRef(0);

  useEffect(() => {
    setContactState(initialState);
  }, []);

  const handleChange = ({ target }: any) => {
    if (target.name === 'number') {
      if (target.value.length === 3 && phoneLength.current === 2) {
        target.value = target.value + '-';
      } else if (target.value.length === 7 && phoneLength.current === 6) {
        target.value = target.value + '-';
      }
    }
    setContactState({ ...contactState, [target.name]: target.value });
    phoneLength.current = target.value.length;
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    if (
      !contactState.name ||
      !contactState.email ||
      !contactState.message ||
      !contactState.subject ||
      !contactState.number
    ) {
      showSnackbar('Please fill out all fields', 'warning');
      setLoading(false);
      return;
    } else if (contactState.number.length !== 12) {
      showSnackbar('Please enter a full phone number', 'warning');
      setLoading(false);
      return;
    }

    if (contactState.subject === 'web') {
      contactState.secondUser = 'mattbloemke@gmail.com';
    }

    const response = await fetch(`/api/email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactState),
    });

    showSnackbar(
      response.status === 200 ? 'The message was sent' : response.statusText,
      response.status === 200 ? 'success' : 'error'
    );

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen pt-24 pb-20 flex justify-center">
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/textures/noise.svg')] opacity-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#8c52ff33] via-transparent to-[#fb5d0022]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative w-full max-w-3xl mx-auto px-6">
        {/* PAGE HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-wide">
            Contact Us
          </h1>
          <div className="w-40 h-[3px] mx-auto mt-3 rounded-full bg-gradient-to-r from-[#8c52ff] to-[#fb5d00]" />
          <p className="text-gray-300 mt-4">
            Tell us about your project — we’ll get back to you shortly.
          </p>
        </div>

        {/* GLASS CARD */}
        <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-xl p-6 shadow-[0_0_25px_rgba(0,0,0,0.4)]">
          <form onSubmit={handleSubmit}>
            {/* NAME + PHONE */}
            <div className="grid md:grid-cols-2 gap-4 w-full py-2 mt-2">
              <TextField
                variant="filled"
                label="Name"
                name="name"
                fullWidth
                onChange={handleChange}
                value={contactState.name}
              />

              <TextField
                variant="filled"
                name="number"
                label="Phone Number"
                fullWidth
                onChange={handleChange}
                value={contactState.number}
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col py-2">
              <TextField
                variant="filled"
                name="email"
                label="Email"
                fullWidth
                type="email"
                value={contactState.email}
                onChange={handleChange}
              />
            </div>

            {/* SUBJECT */}
            <div className="flex flex-col py-2">
              <FormControl variant="filled" fullWidth>
                <InputLabel id="subject-label">Subject</InputLabel>
                <Select
                  label="Subject"
                  labelId="subject-label"
                  value={contactState.subject}
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

            {/* MESSAGE */}
            <div className="flex flex-col py-2">
              <TextField
                name="message"
                label="Message"
                onChange={handleChange}
                value={contactState.message}
                variant="filled"
                multiline
                rows={4}
                fullWidth
              />
            </div>

            {/* BUTTON */}
            <div className="w-full text-center mt-6">
              <LoadingButton
                style={{ borderRadius: 28 }}
                variant="contained"
                type="submit"
                loading={loading}
              >
                Send Message
              </LoadingButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withSnackbar(Page);
