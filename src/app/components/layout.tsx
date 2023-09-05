'use client';
import React, { useEffect, useState } from 'react';
import Footer from './footer/footer';
import FooterCTA from './footerCta/footercta';
interface props {
  href?: string;
  children?: React.ReactNode;
  CTAtitle?: string;
  CTAbtntext?: string;
}

export default function Layout({
  children = <></>,
  CTAtitle = 'Drop us a line or two, we are open for creative minds and collaborations!',
  CTAbtntext = 'Contact Us',
  href
}: props): JSX.Element {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <div>
          <main>{children}</main>
          <FooterCTA CTAtitle={CTAtitle} CTAbtntext={CTAbtntext} href={href || '/contact-us'} />
          <Footer />
        </div>
      )}
    </>
  );
}
