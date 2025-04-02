import {
    Container,
    Title,
    Text,
    Button,
    Card,
    Stack,
    TextInput,
    AppShell,
    Box,
    Image
  } from '@mantine/core';
  import { ArrowRight } from 'lucide-react';
  import { useState } from 'react';
  import Logo from './assets/SVG/4.2.svg';
  import { resetPassword } from './lib/supabaseClient';
  
  export function PasswordResetRequest() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError('');
  
      try {
        if (!email) {
          throw new Error('Please enter your email address');
        }
  
        const { error: resetError } = await resetPassword(email);
        if (resetError) throw resetError;
        
        setSuccess(true);
      } catch (err) {
        setError(err.message || 'Failed to send reset link');
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <AppShell bg="dark.6">
        <Box
          style={{
            background: 'radial-gradient(circle at top right, rgba(255, 75, 43, 0.1), transparent)',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '5%'
          }}
        >
          <Container size="lg">
            <Stack align="center" justify="center">
              <Image src={Logo} alt="DormDash Logo" fit="contain" height={200} />
              <Title
                order={1}
                style={{
                  fontSize: '3rem',
                  lineHeight: 1.1,
                  marginBottom: '2rem',
                  textAlign: 'center'
                }}
              >
                Reset Your
                <Text span inherit style={{ color: '#FF4B2B' }}> Password</Text>
              </Title>
  
              <Card withBorder radius="md" p="xl" bg="dark.7" style={{ width: '100%', maxWidth: '450px' }}>
                {!success ? (
                  <form onSubmit={handleSubmit}>
                    <Stack>
                      <Text size="sm" c="dimmed" mb="md">
                        Enter your email address below and we'll send you instructions to reset your password.
                      </Text>
                      
                      <TextInput
                        required
                        label="Email"
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        size="lg"
                        radius="md"
                      />
  
                      {error && <Text c="red" size="sm">{error}</Text>}
  
                      <Button
                        type="submit"
                        size="lg"
                        rightSection={<ArrowRight size={16} />}
                        radius="md"
                        loading={loading}
                        style={{
                          background: 'linear-gradient(45deg, #FF4B2B, #FF416C)'
                        }}
                      >
                        Send Reset Link
                      </Button>
                    </Stack>
                  </form>
                ) : (
                  <Stack align="center" spacing="md">
                    <Title order={3}>Check Your Email</Title>
                    <Text c="dimmed" ta="center">
                      We've sent password reset instructions to {email}
                    </Text>
                    <Text size="sm" c="dimmed" ta="center" style={{ maxWidth: '90%' }}>
                      If you don't see the email, please check your spam folder. The link will expire after 24 hours.
                    </Text>
                    <Text size="sm" c="dimmed" ta="center">
                      Return to your app to continue.
                    </Text>
                  </Stack>
                )}
              </Card>
            </Stack>
          </Container>
        </Box>
      </AppShell>
    );
  }
  
  export default PasswordResetRequest;