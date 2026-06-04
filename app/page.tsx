import Link from 'next/link';

const sections = [
  {
    title: 'Architecture',
    description: 'Vue d\'ensemble de l\'infrastructure',
    href: '/docs/overview',
  },
  {
    title: 'Inventory',
    description: 'Inventaire du matériel et des VM',
    href: '/docs/inventory',
  },
  {
    title: 'Network',
    description: 'Plan réseau et VLANs',
    href: '/docs/network',
  },
  {
    title: 'Storage',
    description: 'Layout de stockage et baies',
    href: '/docs/storage',
  },
  {
    title: 'Proxmox',
    description: 'Configuration des nœuds hyperviseurs',
    href: '/docs/proxmox',
  },
  {
    title: 'TrueNAS',
    description: 'Stockage NAS et backups ZFS',
    href: '/docs/truenas',
  },
  {
    title: 'OPNsense',
    description: 'Firewall et routage',
    href: '/docs/opnsense',
  },
  {
    title: 'Services',
    description: 'Catalogue des services Docker',
    href: '/docs/services',
  },
  {
    title: 'Runbooks',
    description: 'Procédures opérationnelles',
    href: '/docs/runbooks',
  },
  {
    title: 'Decisions',
    description: 'Architecture Decision Records',
    href: '/docs/decisions',
  },
  {
    title: 'Backups',
    description: 'Stratégie de sauvegarde',
    href: '/docs/backups',
  },
  {
    title: 'Roadmap',
    description: 'Évolution du homelab',
    href: '/docs/roadmap',
  },
];

export default function HomePage() {
  return (
    <main className="container mx-auto max-w-4xl py-16 px-4">
      <h1 className="text-4xl font-bold">Homelab Wiki</h1>
      <p className="text-lg mt-4 text-fd-muted-foreground">
        Base de connaissance technique de l&apos;infrastructure personnelle.
        Documentation des services, configuration réseau, procédures et décisions
        d&apos;architecture.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Sections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="block p-4 rounded-lg border border-fd-border bg-fd-card hover:bg-fd-accent hover:text-fd-accent-foreground transition-colors"
            >
              <h3 className="font-medium">{section.title}</h3>
              <p className="text-sm text-fd-muted-foreground mt-1">
                {section.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Infrastructure Overview</h2>
        <p className="mt-4 text-fd-muted-foreground">
          Ce wiki centralise la documentation de l&apos;infrastructure homelab :
          inventaire matériel, topologie réseau, configuration des hyperviseurs
          Proxmox, stockage TrueNAS, firewall OPNsense, et l&apos;ensemble des
          services déployés. Chaque section est maintenue comme source de
          vérité pour l&apos;exploitation et l&apos;évolution du système.
        </p>
      </section>
    </main>
  );
}
