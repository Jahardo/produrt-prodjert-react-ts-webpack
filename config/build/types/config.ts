
export type BuildMode ='production' | 'development'

export interface BuidlPaths {
    entry:string;
    build:string;
    html:string
}

export interface BuildEnv {
    mode: BuildMode,
    port:number,
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuidlPaths;
    isDev:boolean,
    port:number,
}