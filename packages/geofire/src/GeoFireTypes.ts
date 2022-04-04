/* tslint:disable:no-import-side-effect no-namespace */
export interface Document {
  '.priority': any;
  g: any;
  l: any;
}
export type KeyCallback = (
  key?: string,
  location?: any,
  distanceFromCenter?: number
) => void;
export interface LocationTracked {
  location: any;
  distanceFromCenter: number;
  isInQuery: boolean;
  geohash: any;
}
export type ReadyCallback = () => void;
export interface QueryCallbacks {
  ready: ReadyCallback[];
  key_entered: KeyCallback[];
  key_exited: KeyCallback[];
  key_moved: KeyCallback[];
}
