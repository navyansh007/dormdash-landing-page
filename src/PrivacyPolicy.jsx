import {
    Container, Title, Text, AppShell, Divider,
    Box, Group, Anchor, Button,
    Image
} from '@mantine/core';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './assets/SVG/4.2.svg';

export function PrivacyPolicy() {
    return (
        <AppShell bg="dark.6">
            {/* Header Section */}
            <Box
                style={{
                    background: 'radial-gradient(circle at top right, rgba(255, 75, 43, 0.1), transparent)',
                    paddingTop: '2rem',
                    paddingBottom: '2rem',
                }}
            >
                <Container size="lg">
                    <Group justify="space-between" align="center">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Group align="center">
                                <Image src={Logo} alt="DormDash Logo" fit='contain' height={60} />
                            </Group>
                        </Link>
                        <Button
                            component={Link}
                            to="/"
                            variant="subtle"
                            leftSection={<ArrowLeft size={16} />}
                            color="gray"
                        >
                            Back to Home
                        </Button>
                    </Group>
                </Container>
            </Box>

            <Divider color="dark.8" />

            {/* Privacy Policy Content */}
            <Container size="md" py={40}>
                <Title order={1} ta="center" mb={40}>Privacy Policy</Title>
                
                <Box mb={30}>
                    <Title order={2} size="h3" mb={15}>Introduction</Title>
                    <Text>
                        DormDash ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by DormDash. This Privacy Policy applies to our website, mobile application, and related services (collectively, our "Service").
                    </Text>
                </Box>

                <Box mb={30}>
                    <Title order={2} size="h3" mb={15}>Information We Collect</Title>
                    <Text mb={10}>
                        We collect several types of information from and about users of our Service, including:
                    </Text>
                    <Text component="ul" mb={15}>
                        <li><strong>Personal Information:</strong> We collect information that you provide directly to us, such as your name, email address, phone number, registration number, and year of study when you register for our Service.</li>
                        <li><strong>Order Information:</strong> When you place an order through our Service, we collect information about the transaction, such as product details, purchase amount, and date and time of the transaction.</li>
                        <li><strong>Usage Information:</strong> We automatically collect information about your interactions with our Service, such as IP address, device information, browser type, pages viewed, and time spent on those pages.</li>
                        <li><strong>Location Information:</strong> With your consent, we may collect precise location information from your device to provide you with location-based services, such as delivery tracking.</li>
                    </Text>
                </Box>

                <Box mb={30}>
                    <Title order={2} size="h3" mb={15}>How We Use Your Information</Title>
                    <Text mb={10}>
                        We use the information we collect to:
                    </Text>
                    <Text component="ul" mb={15}>
                        <li>Process and fulfill your orders</li>
                        <li>Provide, maintain, and improve our Service</li>
                        <li>Send you technical notices, updates, security alerts, and support messages</li>
                        <li>Respond to your comments, questions, and customer service requests</li>
                        <li>Communicate with you about products, services, offers, and promotions</li>
                        <li>Monitor and analyze trends, usage, and activities in connection with our Service</li>
                        <li>Detect, prevent, and address technical issues</li>
                    </Text>
                </Box>

                <Box mb={30}>
                    <Title order={2} size="h3" mb={15}>Sharing of Information</Title>
                    <Text mb={15}>
                        We may share the information we collect in various ways, including:
                    </Text>
                    <Text component="ul" mb={15}>
                        <li><strong>With Vendors and Service Providers:</strong> We share information with third-party vendors, consultants, and other service providers who need access to such information to perform work on our behalf.</li>
                        <li><strong>For Legal Reasons:</strong> We may disclose information if we believe that disclosure is necessary to comply with any applicable law, regulation, legal process, or governmental request.</li>
                        <li><strong>To Protect Rights and Safety:</strong> We may disclose information if we believe it's necessary to protect the rights, property, and safety of DormDash, our users, or the public.</li>
                    </Text>
                </Box>

                <Box mb={30}>
                    <Title order={2} size="h3" mb={15}>Data Security</Title>
                    <Text mb={15}>
                        We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no data transmission over the Internet or electronic storage is 100% secure.
                    </Text>
                </Box>

                <Box mb={30}>
                    <Title order={2} size="h3" mb={15}>Your Choices</Title>
                    <Text mb={15}>
                        You can update, correct, or delete your account information at any time by logging into your account settings. You may also opt out of receiving promotional communications from us by following the instructions in those communications.
                    </Text>
                </Box>

                <Box mb={30}>
                    <Title order={2} size="h3" mb={15}>Changes to This Privacy Policy</Title>
                    <Text mb={15}>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                    </Text>
                </Box>

                <Box mb={30}>
                    <Title order={2} size="h3" mb={15}>Contact Us</Title>
                    <Text mb={15}>
                        If you have any questions about this Privacy Policy, please contact us at:
                    </Text>
                    <Text mb={5}>Email: <a href='mailto:team@dormdash.app'>team@dormdash.app</a></Text>
                </Box>

                <Divider color="dark.8" my={30} />

                <Text ta="center" c="dimmed" size="sm">
                    Last Updated: March 4, 2025
                </Text>
            </Container>

            <Divider color="dark.8" />

            {/* Footer */}
            <Container size="lg">
                <Group justify="center" py={32}>
                    <Text size="sm" c="dimmed" ta="center">© 2025 DormDash. All Rights Reserved.</Text>
                    <Text size="sm" c="dimmed">|</Text>
                    <Anchor component={Link} to="/privacy" size="sm" c="dimmed">
                        Privacy Policy
                    </Anchor>
                </Group>
            </Container>
        </AppShell>
    );
}