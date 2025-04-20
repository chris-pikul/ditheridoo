import type { CSSProperties, PropsWithChildren, ReactNode } from 'react';

import './Section.css';

export type SectionProps = PropsWithChildren<{
    id?: string;
    className?: string;
    contentClassName?: string;
    style?: CSSProperties;

    title: string;
    tools?: ReactNode | (() => ReactNode);
}>;

export function Section(props: SectionProps) {
    return (
        <section
            id={props.id}
            className={'section' + (props.className ? ' ' + props.className : '')}
            style={props.style}>
            <header className='section-head'>
                <h2 className='doto typo-emphasis'>{props.title}</h2>
                {props.tools && (
                    <div className='section-tools'>
                        {typeof props.tools === 'function' ? props.tools() : props.tools}
                    </div>
                )}
            </header>
            <div className={'section-content' + (props.contentClassName ? ' ' + props.contentClassName : '')}>
                {props.children}
            </div>
        </section>
    );
}
