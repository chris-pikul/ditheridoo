import { useState } from 'react';

import BinaryOption from '../components/BinaryOption';
import Labeled from '../components/Labeled';
import { Section } from '../components/Section';
import './Settings.css';

export default function Settings() {
    const [isComplexColor, setComplexColor] = useState<boolean>(false);

    return (
        <Section id='app-settings' title='Settings'>
            <Labeled title='Grayscaler'>Some object here</Labeled>
            <Labeled title='Dither Algorithm'></Labeled>
            <Labeled title='Color Mode'>
                <BinaryOption
                    value={isComplexColor}
                    falsy='Simple Threshold'
                    truthy='Complex Color'
                    onChange={setComplexColor}
                />
            </Labeled>
        </Section>
    );
}
