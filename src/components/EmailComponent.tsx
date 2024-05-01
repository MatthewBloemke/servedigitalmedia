import React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
} from '@react-email/components';

interface props {
  subject: string;
  message: string;
  userEmail: string;
  userName: string;
  phoneNumber: string;
}

function EmailTemplate({
  subject,
  message,
  userEmail,
  userName,
  phoneNumber,
}: props) {
  return (
    <Html>
      <Head>
        <title>{subject}</title>
      </Head>
      <Body style={{ backgroundColor: '#f3f3f3', padding: '20px' }}>
        <Container style={{ padding: '20px', backgroundColor: '#ffffff' }}>
          <Section>
            <Text style={{ fontSize: '24px', fontWeight: 'bold' }}>
              {subject}
            </Text>
          </Section>
          <Section>
            <Text style={{ margin: '10px 0' }}>Message:</Text>
            <Text style={{ margin: '10px 0' }}>{message}</Text>
          </Section>
          <Section>
            <Text style={{ margin: '10px 0' }}>User Email: {userEmail}</Text>
            <Text style={{ margin: '10px 0' }}>User Name: {userName}</Text>
            <Text style={{ margin: '10px 0' }}>
              Phone Number: {phoneNumber}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default EmailTemplate;
