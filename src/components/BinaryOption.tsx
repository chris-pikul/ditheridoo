import type { ReactNode } from 'react';

import './BinaryOption.css';

export type ChildContent = string | ReactNode | (() => ReactNode);

export type BinaryOptionProps = {
    value: boolean;
    falsy: ChildContent;
    truthy: ChildContent;
    onChange: (next: boolean) => void;
};

function resolveChild(prop: ChildContent): ReactNode {
    if (typeof prop === 'function') return prop();
    return prop;
}

function Option(props: { active: boolean; content: ChildContent; onClick: () => void }) {
    return (
        <button
            type='button'
            className={`vt323 typo-emphasis ${props.active ? 'active' : 'inactive'}`}
            tabIndex={0}
            onClick={props.onClick}>
            {resolveChild(props.content)}
        </button>
    );
}

export default function BinaryOption(props: BinaryOptionProps) {
    return (
        <div className='binary-option'>
            <Option active={!props.value} content={props.falsy} onClick={() => props.onChange(false)} />
            <Option active={props.value} content={props.truthy} onClick={() => props.onChange(true)} />
        </div>
    );
}
