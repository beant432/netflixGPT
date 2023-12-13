import OpenAI from "openai";

const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
console.log(OPENAI_API_KEY);
export const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});
