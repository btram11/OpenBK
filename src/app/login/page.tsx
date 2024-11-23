'use client'
import * as React from 'react';
import { Button } from '../components/button';
import { InputField } from '../components/input_field';

export default function Page() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);

  return (
    <main className="flex flex-col justify-center items-center px-8 py-64 bg-white max-md:px-5 max-md:py-24">
      <section className="flex flex-col justify-center px-5 py-1.5 max-w-full bg-gray-100 rounded-xl w-[445px]">
        <h1 className="gap-2.5 self-stretch py-2.5 w-full text-2x1 leading-none text-black font-bold">
          Are you ready to join?
        </h1>
        <form className="flex flex-col w-full">
          <InputField
            label="Email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="flex gap-1.5 items-center mt-1.5 text-xs tracking-wide leading-none text-black cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-[13px] w-[13px]"
            />
            Remember me
          </label>
          <div className="flex flex-col justify-center items-center py-1.5 mt-1.5 w-full">
            <div className="flex flex-col pb-2.5 max-w-full w-[133px]">
              <Button>Log in</Button>
            </div>
            <p className="mt-1.5 text-xs tracking-wide leading-none text-black">
              Don't have an account? <a href="/signup" className="underline">Sign up here.</a>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};