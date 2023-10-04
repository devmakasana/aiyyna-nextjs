'use client';
import React, { useCallback, useState } from 'react';
import { Main, Content, First, Label, Error, Buttons } from './styles';
import Input from '../input/input';
import Button from '../button/button';
import { Container } from '@/app/styles/commoncontainer';
import { isEmail } from '@/app/helper/helper';
import { addNewContact } from '@/app/lib/contentful-contact';
import Requestsuccess from '../requestSuccess/requestsuccess';
import SVGIcon from '../../../../public/assets/svg/SVGIcon';

export default function Requestform() {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [loading, setLoading] = useState(false)

  const onSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      setEmailError(false);
      if (!isEmail(workEmail)) {
        setEmailError(true);
        return;
      }
      setLoading(false)
      try {
        setLoading(true)
        const payload = {
          htmlMessage: `<div><h3>New Book Demo from ${fullName}</h3><div><strong>Name</strong> : ${fullName}<br/><strong>Company Name</strong> : ${companyName}<br/><strong>Work Email</strong> : ${workEmail}<br/><strong>Phone</strong> : ${phone}<br/></div></div>`,
          subject: 'Request A Demo'
        };
        const result = await addNewContact(payload);
        if (result) {
          setFullName('');
          setCompanyName('');
          setWorkEmail('');
          setPhone('');
          setIsSuccess(true);
        } else {
          setApiError(true);
        }
      } catch (error) {
        console.log('error', error);
      } finally{
        setLoading(false)
      }
    },
    [companyName, fullName, phone, workEmail]
  );
  return (
    <div>
      <Main>
        {!isSuccess && (
          <form onSubmit={onSubmit}>
            <Content>
              <First>
                <Label>
                  Full Name <span>*</span>
                </Label>
                <Input
                  placeholder={'Enter your full name'}
                  type={'text'}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
                />
              </First>
              <First>
                <Label>
                  Company Name <span>*</span>
                </Label>
                <Input
                  placeholder={'Enter your company name'}
                  type={'text'}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompanyName(e.target.value)}
                />
              </First>
              <First>
                <Label>
                  Work Email <span>*</span>
                </Label>
                <Input
                  placeholder={'Enter your email address'}
                  type={'text'}
                  hasError={emailError === true}
                  errorMessage={'Please enter a valid email address.'}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWorkEmail(e.target.value)}
                />
              </First>
              <First>
                <Label>
                  Phone <span>*</span>
                </Label>
                <Input
                  placeholder={'Enter your phone number'}
                  type={'number'}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                />
              </First>
              <Buttons>
                <Button title='Request Demo' width={164} isLoading={loading}/>
                {apiError && !emailError && (
                  <Error>
                    <SVGIcon name='error-icon' width='16' height='16' viewBox='0 0 16 16' fill='none' />
                    <p>Somthing Went Wrong! Please Try Again!</p>
                  </Error>
                )}
              </Buttons>
            </Content>
          </form>
        )}
        {isSuccess && <Requestsuccess />}
      </Main>
    </div>
  );
}
