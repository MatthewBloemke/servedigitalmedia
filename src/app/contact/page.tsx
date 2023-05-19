'use client';
import React, { useState, useEffect } from 'react';
import { send } from '@emailjs/browser';
import Alert from '@/components/Alert';
import Error from '@/components/Error';

const initialState = {
  name: '',
  number: '',
  email: '',
  subject: '',
  message: '',
};

const page = () => {
  const [contactState, setContactState] = useState(initialState);
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    setError(false);
    setAlert(false);
    setContactState(initialState);
  }, []);

  const handleChange = ({ target }: any) => {
    setContactState({
      ...contactState,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(contactState);
    // send(
    //   'service_ne09bab',
    //   'template_8gnfxp5',
    //   contactState,
    //   'O_RJ2i4_VWfnQbVbv'
    // ).then(
    //   (result) => {
    //     console.log(result.text);
    //     setAlert(true);
    //     setContactState(initialState);
    //   },
    //   (error) => {
    //     setError(true);
    //     console.log(error.text);
    //   }
    // );
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" w-full md:w-[80%] h-auto rounded-xl lg:p-4">
        <div className="p-4">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2 text-white">
                  Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  name="name"
                  value={contactState.name}
                />
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2 text-white">
                  Phone Number
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  name="number"
                  value={contactState.number}
                />
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2 text-white">Email</label>
              <input
                onChange={handleChange}
                type="email"
                className="border-2 rounded-lg p-3 flex border-gray-300"
                name="email"
                value={contactState.email}
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2 text-white">
                Subject
              </label>
              <select
                onChange={({ target }) =>
                  setContactState({ ...contactState, subject: target.value })
                }
                value={contactState.subject}
                className="border-2 rounded-lg p-3 flex border-gray-300"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="web">Web Design</option>
                <option value="branding">General Branding</option>
                <option value="social">Social Media Promotion</option>
                <option value="video">Video Production</option>
              </select>
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2 text-white">
                Message
              </label>
              <textarea
                onChange={handleChange}
                className="border-2 rounded-lg p-3 border-gray-300"
                rows={10}
                name="message"
                value={contactState.message}
              />
            </div>
            <button className="w-full p-4 text-white hover:scale-105 mt-4">
              Send message
            </button>
          </form>
        </div>
      </div>
      {alert ? <Alert alert={alert} setAlert={setAlert} /> : null}
      {error ? <Error error={error} setError={setError} /> : null}
    </div>
  );
};

export default page;
