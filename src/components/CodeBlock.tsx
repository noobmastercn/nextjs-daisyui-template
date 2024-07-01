// CodeBlock.tsx
'use client';

import CopyToClipboard from 'react-copy-to-clipboard';
import { useState, ReactNode } from 'react';

type CodeBlockProps = {
    children: ReactNode;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
    const [copied, setCopied] = useState(false);
    const [expanded, setExpanded] = useState(true);
    const [visible, setVisible] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 4000);
    };

    const handleToggleExpand = (event: React.MouseEvent) => {
        event.stopPropagation();
        setExpanded(!expanded);
    };

    const handleToggleVisible = () => {
        setVisible(!visible);
    };

    return (
        <div className="relative" onClick={handleToggleVisible}>
            <pre className={`p-4 bg-base-200 rounded-lg ${expanded ? '' : 'max-h-12 overflow-hidden'}`}>
                {children}
            </pre>
            {visible && (
                <div className="absolute top-2 right-2 space-x-2" onClick={(e) => e.stopPropagation()}>
                    <CopyToClipboard text={children?.toString() || ''} onCopy={handleCopy}>
                        <button className={`btn ${copied ? 'btn-success' : 'btn-neutral'} btn-sm`}>
                            {copied ? 'Copied' : 'Copy'}
                        </button>
                    </CopyToClipboard>
                    <button className="btn btn-primary btn-sm" onClick={handleToggleExpand}>
                        {expanded ? 'Collapse' : 'Expand'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default CodeBlock;
