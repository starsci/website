import {useMediaQuery} from 'react-responsive';
import config from '../tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';

const fullConfig = resolveConfig(config);

const breakpoints = fullConfig.theme.screens;

type Breakpoint = keyof typeof breakpoints;

export function useBreakpoint<K extends Breakpoint>(breakpoint: K) {
    const query = `(min-width: ${breakpoints[breakpoint]})`;
    const titleCase = breakpoint[0].toUpperCase() + breakpoint.slice(1);
    type Key = `is${Capitalize<K>}`;
    return {
        [`is${titleCase}`]: useMediaQuery({query}) as boolean,
    } as Record<Key, boolean>;
}