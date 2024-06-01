/// <reference types="vite/client" />

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type First<T extends any[]> = T[0];

type ReturnedBody<T> = NonNullable<Awaited<ReturnType<T>>>;
