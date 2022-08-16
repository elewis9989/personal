import React, { useRef, useState } from 'react';
import { Form, FormState } from './Form';

export function useSubscribeToNewsletter() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef<HTMLInputElement>(null);

  async function subscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setForm({ state: Form.Loading, message: '' });

    // make a request
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current!.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    // check to see if there was error
    const { error } = await res.json();

    if (error) {
      setForm({
        state: Form.Error,
        message: error,
      });

      return;
    }

    if (inputEl.current?.value !== undefined) {
      inputEl.current.value = '';
    }

    setForm({
      state: Form.Success,
      message: `Success! 🎉 You've been added to the list.`,
    });
  }

  return { subscribe, inputEl, form };
}
