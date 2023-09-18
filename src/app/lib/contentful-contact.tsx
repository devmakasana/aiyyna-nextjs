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