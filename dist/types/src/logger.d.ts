interface PrintOptions {
    heading?: string;
    details?: Record<string, unknown>;
}
declare function oopsPrint(message: string, options?: PrintOptions): void;
export { oopsPrint };
