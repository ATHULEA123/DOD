import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: FormData) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) setSubmitted(true);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      {submitted ? (
        <p className="text-green-600">Thank you for your message!</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input {...register('name', { required: 'Name is required' })} className="w-full p-2 border rounded" />
            {errors.name && <p className="text-red-600">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input {...register('email', { required: 'Email is required' })} type="email" className="w-full p-2 border rounded" />
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block font-medium">Message</label>
            <textarea {...register('message', { required: 'Message is required' })} className="w-full p-2 border rounded"></textarea>
            {errors.message && <p className="text-red-600">{errors.message.message}</p>}
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Send</button>
        </form>
      )}
    </div>
  );
}
