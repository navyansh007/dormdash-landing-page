import {
    Container,
    Title,
    Text,
    Card,
    Stack,
    AppShell,
    Box,
    Image
  } from '@mantine/core';
  import { Check } from 'lucide-react';
  import Logo from './assets/SVG/4.2.svg';
  
  export function PasswordResetSuccess() {
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
              
              <Card withBorder radius="md" p="xl" bg="dark.7" style={{ width: '100%', maxWidth: '450px' }}>
                <Stack align="center" spacing="md">
                  <Box 
                    style={{ 
                      background: 'linear-gradient(45deg, #FF4B2B, #FF416C)',
                      borderRadius: '50%',
                      width: '80px',
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem'
                    }}
                  >
                    <Check size={40} color="white" />
                  </Box>
                  <Title order={2}>Password Reset Successful!</Title>
                  <Text c="dimmed" ta="center" size="lg">
                    Your password has been successfully reset.
                  </Text>
                  <Text size="md" c="dimmed" ta="center" style={{ maxWidth: '90%' }}>
                    You can now return to the app and sign in with your new password.
                  </Text>
                  <Text size="sm" c="dimmed" ta="center" style={{ marginTop: '2rem' }}>
                    This window can be safely closed.
                  </Text>
                </Stack>
              </Card>
            </Stack>
          </Container>
        </Box>
      </AppShell>
    );
  }
  
  export default PasswordResetSuccess;