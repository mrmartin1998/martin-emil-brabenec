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
      href: "https://github.com/yourusername",
      username: "@yourusername"
    },
    {
      icon: "linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      username: "Martin Emil Brabenec"
    },
    {
      icon: "email",
      label: "Email",
      href: "mailto:your.email@example.com",
      username: "your.email@example.com"
    }
  ];

  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="Have a question or want to work together? I'd love to hear from you."
      />

      <Section className="bg-base-200">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-base-content/70">Prague, Czech Republic</p>
                <p className="text-base-content/70">Central European Time (CET)</p>
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