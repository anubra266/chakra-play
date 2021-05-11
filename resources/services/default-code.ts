import { models } from "./models";

export const defaultCode = Object.keys(models).reduce(
    (acc: any, nxt: string) => ({
        ...acc,
        [nxt]: { value: models[nxt].defaultValue },
    }),
    {}
);
