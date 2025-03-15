import { Request, Response, NextFunction } from "express";
declare const OopsWare: (dev?: boolean) => (err: Error, req: Request, res: Response, next: NextFunction) => void;
export { OopsWare };
