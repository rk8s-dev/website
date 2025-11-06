import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { docOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.pageTree} themeSwitch={{ enabled: false }} {...docOptions()}>
      {children}
    </DocsLayout>
  );
}
