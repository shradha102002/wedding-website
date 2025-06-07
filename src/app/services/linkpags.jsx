import Link from 'next/link';

export default function ServicesList() {
  const services = [
    { name: 'Wedding Planning & Management', slug: 'wedding-planning' },
    { name: 'Corporate Event Management', slug: 'corporate-events' },
    { name: 'Hospitality & Guest Management', slug: 'hospitality' },
    { name: 'Wedding Decor & Designs', slug: 'wedding-decor' },
    { name: 'Concerts & Live Shows', slug: 'concerts' },
    { name: 'Birthday Party Planners', slug: 'birthday-party' },
    { name: 'Traditional & Social Events', slug: 'traditional-events' },
    { name: 'Event Essentials', slug: 'event-essentials' },
  ];

  return (
    <div className="space-y-2">
      {services.map((service, idx) => (
        <Link key={idx} href={`/services/${service.slug}`} className="text-purple-700 hover:underline block">
          {service.name}
        </Link>
      ))}
    </div>
  );
}
