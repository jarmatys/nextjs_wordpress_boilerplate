import Head from 'next/head';

import BaseLayout from 'components/BaseLayout';
import ContactForm from 'components/Parts/Contacts/Form';
import SimpleHeader from 'components/Parts/Breadcrumbs/Simple';
import MetaTags from 'components/MetaTags';

export default function Contact() {
  return (
    <div>
      <MetaTags title="Contact page" />

      <main>
        <BaseLayout>
          <SimpleHeader h2Text="Contact page" spanText="If you want contact with me!" />
          <ContactForm />
        </BaseLayout>
      </main>
    </div>
  );
}
