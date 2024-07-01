import mdx from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    output: 'export', // 确保静态导出
};

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: {
        // 在这里可以配置 MDX 选项（可选）
    },
});

export default withMDX(nextConfig);