import {
    Container, Title, Text, Button, Card, SimpleGrid,
    Stack, TextInput, AppShell, Center, Divider,
    Box, ThemeIcon, Group, NumberInput
} from '@mantine/core';
import { ArrowRight, Utensils, Bike, Shield } from 'lucide-react';
import axios from 'axios';
import { useState } from 'react';
export function Landing() {

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
            if (!formData.email.endsWith('@muj.manipal.edu')) {
                throw new Error('Please use your Manipal University email address');
            }
     
            const response = await axios.post('https://mail.api.dormdash.app/api/waitlist', {
                email: formData.email,
                name: formData.name,
                year: formData.year,
                regNumber: formData.regNumber
              });
              console.log(response)
            if (response.status !== 200) {
                throw new Error('Failed to join waitlist');
            }
     
            setSuccess(true);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
     };

    return (
        <AppShell bg="dark.6">
            {/* Hero Section */}
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
                        <div style={{ maxWidth: '800px', textAlign: 'center' }}>
                            <Title
                                order={1}
                                style={{
                                    fontSize: '4rem',
                                    lineHeight: 1.1,
                                    marginBottom: '1.5rem',
                                    '@media (maxWidth: 768px)': {
                                        fontSize: '2rem',
                                    }
                                }}
                            >
                                Food
                                <Text span inherit style={{ color: '#FF4B2B' }}> Delivered</Text>
                                <br />
                                <Text span inherit>in Minutes from</Text>
                                <br />
                                <Text span inherit>Hostel Outlets</Text>
                            </Title>
                            <Text size="lg" c="dimmed" mb="xl" mx="auto">
                                The future of campus food delivery is here. Get hassle-free food delivery from your favorite outlets straight to your hostel block.
                            </Text>
                        </div>

                        <Card withBorder radius="md" p="xl" bg="dark.7" style={{ width: '100%', maxWidth: '500px' }}>
                            {!success ? (
                                <form onSubmit={handleSubmit}>
                                    <Stack>
                                        <TextInput
                                            required
                                            label="Email"
                                            placeholder="your.email@muj.manipal.edu"
                                            value={formData.email}
                                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                            size="lg"
                                            radius="md"
                                        />
                                        <TextInput
                                            required
                                            label="Full Name"
                                            placeholder="Enter your full name"
                                            value={formData.name}
                                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                            size="lg"
                                            radius="md"
                                        />
                                        <TextInput
                                            required
                                            label="Registration Number"
                                            placeholder="Enter your registration number"
                                            value={formData.regNumber}
                                            onChange={(e) => setFormData(prev => ({ ...prev, regNumber: e.target.value }))}
                                            size="lg"
                                            radius="md"
                                        />
                                        <NumberInput
                                            required
                                            label="Year of Study"
                                            placeholder="1-4"
                                            min={1}
                                            max={4}
                                            value={formData.year}
                                            onChange={(val) => setFormData(prev => ({ ...prev, year: val }))}
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
                                            Join Waitlist
                                        </Button>
                                        <Text size="sm" c="dimmed" ta="center">
                                            Be among the first to experience DormDash
                                        </Text>
                                    </Stack>
                                </form>
                            ) : (
                                <Stack align="center" spacing="md">
                                    <Title order={3}>You're In!</Title>
                                    <Text c="dimmed" ta="center">
                                        Thanks for joining! Check your email for confirmation.
                                    </Text>
                                </Stack>
                            )}
                        </Card>
                    </Stack>
                </Container>
            </Box>

            {/* Features */}
            <Container size="lg" py={120}>
                <Stack spacing={64}>
                    <Title order={2} ta="center" style={{ fontSize: '3rem' }}>
                        Why Choose DormDash?
                    </Title>

                    <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
                        {[
                            {
                                icon: <Utensils size={24} />,
                                title: "Quality Food",
                                description: "Curated selection of all in-hostel outlets"
                            },
                            {
                                icon: <Bike size={24} />,
                                title: "Fast Delivery",
                                description: "Track and get your food delivered quickly"
                            },
                            {
                                icon: <Shield size={24} />,
                                title: "Easy Food Ordering",
                                description: "Hassle-free food ordering experience"
                            }
                        ].map((feature, index) => (
                            <Card
                                key={index}
                                withBorder
                                radius="md"
                                padding="xl"
                                bg="dark.7"
                            >
                                <ThemeIcon
                                    size={48}
                                    radius="md"
                                    style={{
                                        background: 'linear-gradient(45deg, #FF4B2B, #FF416C)',
                                        marginBottom: '1rem'
                                    }}
                                >
                                    {feature.icon}
                                </ThemeIcon>
                                <Text size="lg" fw={500} mb="sm">{feature.title}</Text>
                                <Text size="sm" c="dimmed">{feature.description}</Text>
                            </Card>
                        ))}
                    </SimpleGrid>
                </Stack>
            </Container>

            <Divider color="dark.8" />

            <Container size="lg">
                <Group justify="center" py={32}>
                    <Text size="sm" c="dimmed" ta="center">© 2025 DormDash. All Rights Reserved.</Text>
                </Group>
            </Container>
        </AppShell>
    );
}