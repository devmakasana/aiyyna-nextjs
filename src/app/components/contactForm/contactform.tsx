'use client';
import React, { useCallback, useState } from 'react';
import { Content, Form, Label, Main, First, Second, Third, Textarea, Error, Buttons } from './styles';
import Input from '../input/input';
import Button from '../button/button';
import { addNewContact } from '@/app/lib/contentful-contact';
import Contactsuccess from '../contactSuccess/contactsuccess';
import { isEmail, isEmpty } from '@/app/helper/helper';
import SVGIcon from '../../../../public/assets/svg/SVGIcon';

export default function Contactform() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      setEmailError(false);
      if (!isEmail(email)) {
        setEmailError(true);
        return;
      }
      setLoading(false);
      try {
        setLoading(true);
        const payload = {
          htmlMessage: `<div><h3>New Lead from ${name}</h3><div><strong>Name</strong> : ${name}<br/><strong>Email</strong> : ${email}<br/><strong>Message</strong> : ${message}<br/></div></div>`,
          subject: 'Contact Us'
        };
        const result = await addNewContact(payload);
        if (result) {
          setIsSuccess(true);
          setName('');
          setEmail('');
          setMessage('');
        } else {
          setApiError(true);
        }
      } catch (error) {
        console.log('error', error);
      } finally {
        setLoading(false);
      }
    },
    [email, message, name]
  );

  return (
    <div>
      <Main>
        {(!isSuccess || apiError) && (
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
                  hasError={emailError === true}
                  errorMessage={'Please enter a valid email address.'}
                />
              </Second>
              <Third>
                <Label>How can we help you?</Label>
                <Textarea placeholder={'How can we help you?'} onChange={(e: any) => setMessage(e.target.value)} />
              </Third>
              <Buttons>
                <Button title='Send Message' width={165} type='submit' isLoading={loading} />
                {apiError && !emailError && (
                  <Error>
                    <SVGIcon name='error-icon' width='16' height='16' viewBox='0 0 16 16' fill='none' />
                    <p>Somthing Went Wrong! Please Try Again!</p>
                  </Error>
                )}
              </Buttons>
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
