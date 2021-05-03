//? Type declarations for Ziggy `route`

type EncodeURIParamType = string | number | boolean;

type InputValue =
    | {
          id: number;
      }
    | EncodeURIParamType;

type NormalizedParams =
    | {
          [key: string]: InputValue;
      }
    | InputValue[];

type Params = NormalizedParams | InputValue;

interface Route {
    uri: string;
    methods: Array<
        "GET" | "HEAD" | "POST" | "PATCH" | "PUT" | "OPTIONS" | "DELETE"
    >;
    domain?: null | string;
}
interface Config {
    namedRoutes: {
        [key: string]: Route;
    };
    baseUrl: string;
    baseProtocol: "http" | "https";
    baseDomain: string;
    basePort?: number | null;
    defaultParameters: {
        [_: string]: string | number;
    };
}

type Current = (name?: string, params?: Params) => boolean | string | undefined;

type Router = {
    /**
     * Get the name of the route matching the current window URL, or, given a route name
     * and parameters, check if the current window URL and parameters match that route.
     *
     * @example
     * at URL https://vtril.dev/posts/4 with 'posts.show' route 'posts/{post}'
     * route().current(); => 'posts.show'
     * route().current('posts.index'); => false
     * route().current('posts.show'); => true
     * route().current('posts.show', { post: 1 }); => false
     * route().current('posts.show', { post: 4 }); => true
     *
     * @param {String} name - Route name to check.
     * @param {(String|Number|Array|Object)} params - Route parameters.
     * @return {(Boolean|String|undefined)}
     */
    current: Current;

    /**
     * Get all parameter values from the current window URL.
     *
     * @example
     * at URL https://anubra.vtril.dev/posts/4?lang=en with 'posts.show' route 'posts/{post}' and domain '{team}.vtril.dev'
     * route().params; => { team: 'anubra', post: 4, lang: 'en' }
     *
     * @return {Object}
     */
    params: NormalizedParams;

    /**
     * Check whether the given route exists.
     *
     * @param {String} name
     * @return {Boolean}
     */
    has: (name: string) => boolean;
};

/**
 * @param {String} name - Route name.
 * @param {(String|Number|Array|Object)} params - Route parameters.
 * @param {Boolean} absolute - Whether to include the URL origin.
 * @param {Object} config - Ziggy configuration.
 *
 * @return {string | Router}
 */

declare function route(): Router;
declare function route(
    name: string,
    params?: Params,
    absolute?: boolean,
    config?: Config
): string;
