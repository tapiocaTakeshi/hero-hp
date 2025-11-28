import * as functions from 'firebase-functions';
import { Request, Response } from 'express';

export const helloWorld = functions.https.onRequest((request: Request, response: Response) => {
  response.send("Hello from Firebase!");
});
