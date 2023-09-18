'use client';
import React, { useCallback, useState } from 'react';
import { Content, Form, Label, Main, First, Second, Third, Textarea } from './styles';
import Input from '../input/input';
import Button from '../button/button';
import { addNewContact } from '@/app/lib/contentful-contact';
import Contactsuccess from '../contactSuccess/contactsuccess';
import { isEmail, isEmpty } from '@/app/helper/helper';

export default function Contactform() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      setEmailError('');
      if (!isEmail(email)) {
        let validEmail = 'Please enter a valid email address.';
        setEmailError(validEmail);
        return;
      }
      try {
        const payload = {
          name: name,
          email: email,
          message: !isEmpty(message) ? message : null,
          type: 'contactUs'
        };
        const result = await addNewContact(payload);
        if (result) {
          setName('');
          setEmail('');
          setMessage('');
          setIsSuccess(true);
        }
      } catch (error) {
        console.log('error', error);
      }
    },
    [email, message, name]
  );

  return (
    <div>
      <Main>
        {!isSuccess && (
          <Content>
            <Form onSubmit={onSubmit}>
              <First>
                <Label>
                  Name <span>*</span>
                </Label>
                <Input
                  placeholder={'Enter your name'}
                  type={'text'}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
              </First>
              <Second>
                <Label>
                  Email Address <span>*</span>
                </Label>
                <Input
                  placeholder={'Enter your email address'}
                  type={'text'}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  hasError={!isEmpty(emailError)}
                  errorMessage={'Please enter a valid email address.'}
                />
              </Second>
              <Third>
                <Label>How can we help you?</Label>
                <Textarea placeholder={'How can we help you?'} onChange={(e: any) => setMessage(e.target.value)} />
              </Third>
              <Button title='Send Message' width={165} type='submit' />
            </Form>
          </Content>
        )}
        {isSuccess && (
          <>
            <Contactsuccess />
          </>
        )}
      </Main>
    </div>
  );
}
