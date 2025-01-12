'use client';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import { validateContact } from '@/lib/validations/contact';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateContact(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="form-control">
        <label className="label" htmlFor="name">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`input input-bordered w-full ${errors.name ? 'input-error' : ''}`}
          disabled={status === 'loading'}
        />
        {errors.name && (
          <span className="text-error text-sm mt-1">{errors.name}</span>
        )}
      </div>

      <div className="form-control">
        <label className="label" htmlFor="email">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`}
          disabled={status === 'loading'}
        />
        {errors.email && (
          <span className="text-error text-sm mt-1">{errors.email}</span>
        )}
      </div>

      <div className="form-control">
        <label className="label" htmlFor="subject">
          <span className="label-text">Subject</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`input input-bordered w-full ${errors.subject ? 'input-error' : ''}`}
          disabled={status === 'loading'}
        />
        {errors.subject && (
          <span className="text-error text-sm mt-1">{errors.subject}</span>
        )}
      </div>

      <div className="form-control">
        <label className="label" htmlFor="message">
          <span className="label-text">Message</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`textarea textarea-bordered h-32 ${errors.message ? 'textarea-error' : ''}`}
          disabled={status === 'loading'}
        />
        {errors.message && (
          <span className="text-error text-sm mt-1">{errors.message}</span>
        )}
      </div>

      <div className="flex items-center gap-4">
        <Button
          type="submit"
          disabled={status === 'loading'}
          className="w-full md:w-auto"
        >
          {status === 'loading' ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : 'Send Message'}
        </Button>

        {status === 'success' && (
          <span className="text-success">Message sent successfully!</span>
        )}
        {status === 'error' && (
          <span className="text-error">Failed to send message. Please try again.</span>
        )}
      </div>
    </form>
  );
} 