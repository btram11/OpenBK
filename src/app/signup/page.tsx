'use client'

import * as React from 'react';
import { InputField } from '../components/input_field';
import { Button } from '../components/button';

export default function Page() {
  const [form, setForm] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    username: ''
  })

  return (
    <main className="flex flex-col justify-center items-center px-8 py-60 bg-white max-md:px-5 max-md:py-24">
      <section className="flex flex-col justify-center px-5 py-1.5 max-w-full bg-gray-100 rounded-xl w-[560px]">
        <header className="flex-1 shrink gap-2.5 self-stretch py-2.5 max-w-full text-2xl leading-none text-black w-[405px]">
          <h1 className="font-bold">Sign up</h1>
        </header>
        
        <form className="flex flex-col justify-center py-1.5 mt-1.5 w-full text-sm text-black max-md:max-w-full">
          <div className="flex justify-center flex-col overflow-hidden w-full max-md:max-w-full">
            <div id="split" className="flex w-full">
                <div className="w-1/2 pr-2">
                  <InputField
                  label="First name"
                  type="First name"
                  placeholder="Enter first name"
                  value={form.firstName}
                  onChange={(e) => setForm(prevForm => ({
                      ...prevForm,
                      firstName: e.target.value
                  }))}
                  />
                </div>
                <div className="w-1/2 pl-2">
                  <InputField
                  label="Last name"
                  type="Last name"
                  placeholder="Enter last name"
                  value={form.lastName}
                  onChange={(e) => setForm(prevForm => ({
                      ...prevForm,
                      lastName: e.target.value
                  }))}
                  />
                </div>
            </div>

            <InputField
            label="Email"
            type="Email"
            placeholder="Enter email"
            value={form.email}
            onChange={(e) => setForm(prevForm => ({
                ...prevForm,
                email: e.target.value
            }))}
            />
           <InputField
            label="Username"
            type="Username"
            placeholder="Enter username"
            value={form.username}
            onChange={(e) => setForm(prevForm => ({
                ...prevForm,
                username: e.target.value
            }))}
            />
            <InputField
            label="Password"
            type="Password"
            placeholder="Enter password"
            value={form.password}
            onChange={(e) => setForm(prevForm => ({
                ...prevForm,
                password: e.target.value
            }))}
            />
          </div>

          <div className="flex flex-col self-center pb-2.5 mt-4 max-w-full font-semibold w-[133px]">
            <Button>Sign up</Button>
          </div>
        </form>
      </section>
    </main>
  );
}