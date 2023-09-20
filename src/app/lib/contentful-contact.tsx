import { fetchGraphQL } from './contentful';

/**
 * @desc Web Hooks - Add New Contact
 * @param {*} payload
 */
export const addNewContact = async (payload: object) => {
  try {
    const newpayload = { payload };
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(newpayload),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data?.result;
  } catch (error) {
    return error;
  }
};
const POST_GRAPHQL_CONTACT_DATA = `
title
description
email
cta{
  content
}
seoMetadata{
  seoTitle
}
`;

export async function getContactData({ id, preview }: { id: string; preview: boolean }) {
  const contactData = await fetchGraphQL(
    `query {
      pageContact(id: "${id}", preview: ${preview ? 'true' : 'false'}){
        ${POST_GRAPHQL_CONTACT_DATA}
      }
    }`
  );
  return contactData?.data?.pageContact;
}
