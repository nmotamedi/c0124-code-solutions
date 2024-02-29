import { takeAChance } from './take-a-chance.js';
takeAChance('Nader')
  .then((message: string) => console.log(message))
  .catch((error: Error) => console.log(error.message));
