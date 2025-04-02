import {
    Container,
    Title,
    Text,
    Button,
    Card,
    Stack,
    AppShell,
    Box,
    Image,
    PasswordInput
  } from '@mantine/core';
  import { ArrowRight } from 'lucide-react';
  import { useState, useEffect } from 'react';
  import { useNavigate } from 'react-router-dom';
  import Logo from './assets/SVG/4.2.svg';
  import { updatePassword } from './lib/supabaseClient';
  
  export function PasswordResetConfirm() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
  
    // Verify that the URL contains recovery parameters
    useEffect(() => {
      const hash = window.location.hash;
      if (!hash || !hash.includes('type=recovery')) {
        setError('Invalid or expired password reset link. Please request a new password reset.');
      }
    }, []);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError('');
  
      try {
        // Basic validation
        if (password.length < 6) {
          throw new Error('Password must be at least 6 characters long');
        }
  
        if (password !== confirmPassword) {
          throw new Error('Passwords do not match');
          return;
        }
  
        // Update password
        const { error: updateError } = await updatePassword(password);
        if (updateError) throw updateError;
  
        // Navigate to success page
        navigate('/reset-password-success');
      } catch (err) {
        setError(err.message || 'Failed to reset password');
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
                Create New
                <Text span inherit style={{ color: '#FF4B2B' }}> Password</Text>
              </Title>
  
              <Card withBorder radius="md" p="xl" bg="dark.7" style={{ width: '100%', maxWidth: '450px' }}>
                <form onSubmit={handleSubmit}>
                  <Stack>
                    {error ? (
                      <>
                        <Text c="red" size="sm" ta="center">{error}</Text>
                        {error.includes('Invalid or expired') && (
                          <Button
                            onClick={() => navigate('/reset-password')}
                            variant="light"
                            size="md"
                            radius="md"
                          >
                            Request New Reset Link
                          </Button>
                        )}
                      </>
                    ) : (
                      <>
                        <Text size="sm" c="dimmed" mb="md">
                          Create a new secure password for your account.
                        </Text>
                        
                        <PasswordInput
                          required
                          label="New Password"
                          placeholder="Enter your new password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          size="lg"
                          radius="md"
                        />
                        
                        <PasswordInput
                          required
                          label="Confirm Password"
                          placeholder="Confirm your new password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          size="lg"
                          radius="md"
                        />
  
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
                          Reset Password
                        </Button>
                      </>
                    )}
                  </Stack>
                </form>
              </Card>
            </Stack>
          </Container>
        </Box>
      </AppShell>
    );
  }
  
  export default PasswordResetConfirm;