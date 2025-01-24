import { useState } from 'react';
import { Stack, TextInput, Button, Text, NumberInput } from '@mantine/core';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'YOUR_SUPABASE_URL',
  'YOUR_SUPABASE_ANON_KEY'
);

export function WaitlistForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    year: '',
    regNumber: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Validate email domain
      if (!formData.email.endsWith('@learn.manipal.edu')) {
        throw new Error('Please use your Manipal University email address');
      }

      // Insert into Supabase
      const { error: dbError } = await supabase
        .from('waitlist')
        .insert([
          {
            email: formData.email,
            name: formData.name,
            year: formData.year,
            reg_number: formData.regNumber,
            signed_up_at: new Date().toISOString()
          }
        ]);

      if (dbError) throw dbError;

      // Send confirmation email
      const response = await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send confirmation email');
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <TextInput
          required
          label="Email"
          placeholder="your.email@learn.manipal.edu"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
        <TextInput
          required
          label="Full Name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        />
        <NumberInput
          required
          label="Year of Study"
          placeholder="1-4"
          min={1}
          max={4}
          value={formData.year}
          onChange={(val) => setFormData(prev => ({ ...prev, year: val }))}
        />
        <TextInput
          required
          label="Registration Number"
          placeholder="Enter your registration number"
          value={formData.regNumber}
          onChange={(e) => setFormData(prev => ({ ...prev, regNumber: e.target.value }))}
        />
        
        {error && <Text c="red">{error}</Text>}
        {success && (
          <Text c="teal">Thanks for joining! Check your email for confirmation.</Text>
        )}
        
        <Button 
          type="submit" 
          loading={loading}
          style={{
            background: 'linear-gradient(45deg, #FF4B2B, #FF416C)'
          }}
        >
          Join Waitlist
        </Button>
      </Stack>
    </form>
  );
}