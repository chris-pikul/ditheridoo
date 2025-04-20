import Labeled from '../components/Labeled';
import { Section } from '../components/Section';
import './Settings.css';

export default function Settings() {
    return (
        <Section id='app-settings' title='Settings'>
            <Labeled title='Grayscaler'>Some object here</Labeled>
            <Labeled title='Dither Algorithm'></Labeled>
            <Labeled title='Color Mode'></Labeled>
        </Section>
    );
}
