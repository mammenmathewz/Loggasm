// dist/index.d.ts or index.d.ts
import { RequestHandler } from 'express';

interface PrintOptions {
    heading?: string;
    details?: Record<string, unknown>;
}

declare function oopsPrint(message: string, options?: PrintOptions): void;

declare const OopsWare: (dev?: boolean) => RequestHandler;

export { oopsPrint, OopsWare };