import BaseLayout from 'components/BaseLayout';
import ContactForm from 'components/Parts/Contacts/Form';
import SimpleHeader from 'components/Parts/Breadcrumbs/Simple';

export default function Contact() {
  return (
    <BaseLayout>
      <SimpleHeader h2Text="Contact page" spanText="If you want contact with me!" />
      <ContactForm />
    </BaseLayout>
  );
}
