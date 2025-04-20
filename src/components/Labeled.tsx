import { Children, type PropsWithChildren, cloneElement, isValidElement, useState } from 'react';

import './Labeled.css';

export type LabeledProps = PropsWithChildren<{
    title: string;
    onClick?: () => void;
}>;

export default function Labeled(props: LabeledProps) {
    const [focused, setFocused] = useState<boolean>(false);

    return (
        <div className={`labeled ${focused ? 'focus' : 'blur'}`} onClick={props.onClick}>
            <label className='labeled-title vt323 typo-normal'>{props.title}</label>
            {Children.map(props.children, (child) => {
                if (isValidElement(child))
                    cloneElement(child, { onFocus: () => setFocused(true), onBlur: () => setFocused(false) } as any);
                return child;
            })}
        </div>
    );
}
