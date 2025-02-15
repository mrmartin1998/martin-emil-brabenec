import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import ContactForm from '@/components/contact/ContactForm';
import SocialIcon from '@/components/ui/SocialIcon';

export const metadata = {
  title: 'Contact | Martin Emil Brabenec',
  description: 'Get in touch with me for collaboration, opportunities, or just to say hello.',
};

export default function ContactPage() {
  const socialLinks = [
    {
      icon: "github",
      label: "GitHub",
      href: "https://github.com/mrmartin1998/",
      username: "@mrmartin1998"
    },
    {
      icon: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/martin-emil-brabenec-33b818148/",
      username: "Martin Emil Brabenec"
    },
    {
      icon: "email",
      label: "Email",
      href: "mailto:martinemilbrabenec@gmail.com",
      username: "martinemilbrabenec@gmail.com"
    }
  ];

  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="Get in touch with me for collaboration, opportunities, or just to say hello."
      />

      <Section className="bg-base-200 rounded-3xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-base-content/70">Castellón, Spain</p>
                <p className="text-base-content/70">Central European Time (CET/CEST)</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Availability</h3>
                <div className="flex items-center gap-2">
                  <span className="badge badge-success"></span>
                  <span>Available for new projects</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Connect with me</h3>
                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-primary transition-colors"
                    >
                      <SocialIcon name={link.icon} />
                      <span className="text-base-content/70">{link.username}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
} 