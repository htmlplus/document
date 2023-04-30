type ExtractOptional<Key extends string> = Key extends `${infer Start}?`
  ? true
  : Key extends `${infer Start}?${infer End}`
  ? true
  : false;

type ExtractParameter<Key extends string> = ExtractOptional<Key> extends true
  ? Partial<ExtractRecord<Key>>
  : ExtractRecord<Key>;

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

export const ROUTES = {
  HOME: '/',
  CONTRIBUTING: '/contributing',
  CHANGELOG: '/changelog',
  VISION: '/vision',
  CODE_COMPLETION: '/code-completion',
  ANIMATIONS: '/component/animation/names',
  ICONS: '/component/icon/names',
  BIDIRECTIONALITY: '/bidirectionality',
  GLOBAL_CONFIG: '/global-config',
  OVERVIEW: '/overview',
  INSTALLATION: '/installation',
  INSTALLATION_FRAMEWORK: '/[framework]/installation',
  BROWSERS: '/browsers',
  COMPONENT_DETAILS: '/[framework]/component/[component]',
  COMPONENT_EXAMPLE: '/component/[component]/example/[example]',
  COMPONENT_CONFIG: '/[framework]/component/[component]/config',
  API_DETAILS: '/[framework]/api/[component]',
  CODEOFCONDUCT: '/code-of-conduct',
  GITHUB_URL: 'https://github.com/htmlplus/core',
  ASSETS: '/assets/[filepath]',
  CONTRIBUTOR: 'https://github.com/[contributor].png?size=90',
  CONTRIBUTOR_GITHUB: 'https://github.com/[contributor]',
  SOCIAL_TWITTER: 'https://www.twitter.com/htmlplusio',
  SOCIAL_LINKEDIN: 'https://www.linkedin.com/company/htmlplus',
  SOCIAL_INSTAGRAM: 'https://www.instagram.com/htmlplus.io',
  SOCIAL_GITHUB: 'https://github.com/htmlplus/htmlplus',
  SOCIAL_YOUTUBE: 'https://www.youtube.com/channel/UCsNkxDmLU7vK_L1jgSVWWCA',
  GITHUB_COMMITS: 'https://api.github.com/repos/htmlplus/[repository]/commits?path=[path]',
  EXAMPLE_CODE_SANDBOX_LINK:
    'https://codesandbox.io/s/github/htmlplus/examples/tree/main/dist/[framework]/[component]/[example]',
  EXAMPLE_GITHUB_LINK: 'https://github.com/htmlplus/examples/tree/main/dist/[framework]/[component]/[example]',
  EXAMPLE_DOWNLOAD_LINK:
    'https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/htmlplus/examples/tree/main/dist/[framework]/[component]/[example]',
  TYPE_GITHUB_LINK: 'https://github.com/htmlplus/core/tree/main/src/components/[component]/[fileName]'
} as const;

export const getPath = getPathCore<typeof ROUTES>();
