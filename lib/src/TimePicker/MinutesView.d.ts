import { ComponentClass } from 'react';
import { Utils } from '../utils/utils';

export interface MinutesViewProps {
    date: object;
    onChange: (date: Moment, isFinished?: boolean) => void;
    utils?: Utils;
}

declare const MinutesView: ComponentClass<MinutesViewProps>;

export default MinutesView;
