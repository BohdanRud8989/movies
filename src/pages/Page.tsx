import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { APP_HOST, META } from "../utils";

type PageProps = {
  children: React.ReactNode;
};

const Page = ({ children }: PageProps) => {
  const location = useLocation();

  const pageURL = APP_HOST + location.pathname;

  return (
    <>
      <Helmet>
        <title>{META.title}</title>
        <meta name="description" content={META.description} />
        <link rel="canonical" href={pageURL} />

        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={META.title} />
        <meta property="og:description" content={META.description} />
        <meta property="og:url" content={pageURL} />
        <meta property="og:site_name" content="Wookie movies" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={META.title} />
        <meta property="twitter:description" content={META.description} />
      </Helmet>
      {children}
    </>
  );
};

export default Page;
