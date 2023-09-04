'use client';
import React, { useEffect, useState } from 'react';
import Footer from './footer/footer';
import FooterCTA from './footerCta/footercta';

export default function Layout({
  children = <></>,
  CTAtitle = 'Drop us a line or two, we are open for creative minds and collaborations!',
  CTAbtntext = 'Contact Us'
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div>
          <main>{children}</main>
          <FooterCTA CTAtitle={CTAtitle} CTAbtntext={CTAbtntext} />
          <Footer />
        </div>
      )}
    </>
  );
}
