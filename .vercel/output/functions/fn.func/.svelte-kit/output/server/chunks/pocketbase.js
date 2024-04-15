import { P as PUBLIC_PB_URL } from "./public.js";
import PocketBase from "pocketbase";
const pb = new PocketBase(PUBLIC_PB_URL);
export {
  pb as p
};
