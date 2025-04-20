import type { PropsWithChildren } from 'react';

import './Labeled.css';

export type LabeledProps = PropsWithChildren<{
    title: string;
    onClick?: () => void;
}>;

export default function Labeled(props: LabeledProps) {
    return (
        <div className='labeled' onClick={props.onClick}>
            <label className='labeled-title vt323 typo-normal'>{props.title}</label>
            {props.children}
        </div>
    );
}
