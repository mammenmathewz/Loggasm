// src/middleware.ts
import figlet from "figlet";
import chalk from "chalk";
import { getRandomErrorArt } from "./art/errorArt.js";
import { Request, Response, NextFunction } from "express";

const OopsWare = (dev: boolean = false) => {
  return (err: Error, req: Request, res: Response, next: NextFunction): void => {
    if (dev) {
      console.log(chalk.red(figlet.textSync("ERROR!", { horizontalLayout: "default" })));
      console.log(chalk.red(getRandomErrorArt()));
      console.error(chalk.bgRed(`Error: ${err?.message || "Unknown error"}`));
      console.error(chalk.red(`[Stack]: ${err?.stack || "No stack trace"}`));

      res.status(500).json({
        error: err?.message || "Unknown error",
        stack: err?.stack || "No stack trace",
      });
    } else {
      console.error(chalk.bgRed(`Error: ${err?.message || "Unknown error"}`));

      res.status(500).json({
        error: "Something went wrong. Please try again.",
      });
    }
    next();
  };
};

export { OopsWare };