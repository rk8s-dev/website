import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
            src="/images/logo/logo-blue.svg"
            width={24}
            height={24}
            alt="Logo"
            className="mr-2"
          />
          RK8S
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        text: 'Install',
        url: '/install',
        active: 'nested-url',
      },
      {
        text: 'Documentation',
        url: '/docs',
        active: 'nested-url',
      },
      {
        text: 'Blog',
        url: '/blog',
        active: 'nested-url',
      },
      {
        text: 'Forge',
        url: 'https://forge.rk8s.dev',
        active: 'nested-url',
      },
    ],
  };
}

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Docs Layout: app/docs/layout.tsx
 */
export function docOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
            src="/images/logo/logo-blue.svg"
            width={24}
            height={24}
            alt="Logo"
            className="mr-2"
          />
          RK8S
        </>
      ),
    },
  };
}
