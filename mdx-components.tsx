import type { MDXComponents } from 'mdx/types';
import dynamic from 'next/dynamic';

const CodeBlock = dynamic(() => import('./src/components/CodeBlock'), { ssr: false });

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        pre: (props: any) => <div {...props} />,
        code: (props: any) => <CodeBlock {...props} />,
    };
}
