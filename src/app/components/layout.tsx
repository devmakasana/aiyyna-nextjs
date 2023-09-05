import Footer from './footer/footer';
import FooterCTA from './footerCta/footercta';
import Header from './header/header';
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
  return (
    <>
      <div>
        <main>{children}</main>
        <FooterCTA CTAtitle={CTAtitle} CTAbtntext={CTAbtntext} href={href || '/contact-us'} />
        <Footer />
      </div>
    </>
  );
}
