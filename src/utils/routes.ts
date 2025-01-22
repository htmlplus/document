import { ROUTES } from '@/constants';

type ExtractOptional<Key extends string> = Key extends `${infer Start}?`
  ? true
  : Key extends `${infer Start}?${infer End}`
    ? true
    : false;

type ExtractParameter<Key extends string> =
  ExtractOptional<Key> extends true ? Partial<ExtractRecord<Key>> : ExtractRecord<Key>;

type ExtractParameterKey<Key extends string> = Key extends `${infer Start}?${infer End}`
  ? Start
  : Key extends `${infer Start}:${infer End}`
    ? Start
    : Key;

type ExtractParameterType<Key extends string> = Key extends `${infer Start}:boolean`
  ? boolean
  : Key extends `${infer Start}:number`
    ? number
    : string;

type ExtractRecord<Key extends string> = Record<ExtractParameterKey<Key>, ExtractParameterType<Key>>;

type ExtractParameters<Input extends string> = Input extends `${infer Start}[${infer Key}]${infer End}`
  ? ExtractParameter<Key> & ExtractParameters<End>
  : {};

type ExtractRouteKey<T extends Routes> = T[keyof T];

type Routes = {
  readonly [key: string]: string;
};

const getPathCore =
  <R extends Routes>() =>
  <Path extends ExtractRouteKey<R>, Parameter extends ExtractParameters<Path>>(path: Path, parameter: Parameter) => {
    let result = path as string;

    result = result.replace(/\[(\w+)(\?)?(:)?(\w+)?\]/g, '[$1$2]');

    if (parameter) {
      for (const key in parameter) {
        const value = (parameter as any)[key] as string;
        result = result.replace(`[${key}]`, value).replace(`[${key}?]`, value);
      }
    }

    result = result
      .replace(/\/\[(\w+)\?\]/g, '')
      .replace(/\w+=\[\w+(\?)\]/g, '')
      .replace(/(\?|&)+$/, '');

    return result;
  };

export const getPath = getPathCore<typeof ROUTES>();
