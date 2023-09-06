import classNames from '*.scss';

type Mods = Record<string, boolean | string >

export function ClassNames(cls:string, mods?:Mods, additional?:string[]): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...additional,
        Object.entries(mods)
            .filter(([cls, value]) => Boolean(value))
            .map(([cls]) => cls),
    ].join(' ');
}
