import Head from 'next/head';

import BaseLayout from 'components/BaseLayout';
import ContactForm from 'components/Parts/Contacts/Form';
import GoogleMaps from 'components/Parts/Contacts/GoogleMaps';
import SimpleHeader from 'components/Parts/Breadcrumbs/Simple';
import MetaTags from 'components/MetaTags';
import SimpleCompanies from 'components/Parts/Companies/Simple';

export default function Contact() {
  return (
    <div>
      <MetaTags title="Contact page" />

      <main>
        <BaseLayout>
          <SimpleHeader h2Text="Contact page" spanText="If you want contact with me!" />
          <ContactForm />
          <GoogleMaps />
          <SimpleCompanies />
        </BaseLayout>
      </main>
    </div>
  );
}
