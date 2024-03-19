export type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
export type Simulation = {
  dice1: DiceRoll;
  dice2: DiceRoll;
  sum: number;
  result: 'win' | 'lose' | 'roll again';
};

export function diceGameSimulation(numSimulations: number): Simulation[] {
  const sims: Simulation[] = [];
  for (let i = 1; i <= numSimulations; i++) {
    const dice1 = Math.ceil(6 * Math.random());
    const dice2 = Math.ceil(6 * Math.random());
    const sum = dice1 + dice2;
    let result = '';
    switch (sum) {
      case 7:
      case 11: {
        result = 'win';
        break;
      }
      case 2:
      case 3:
      case 12: {
        result = 'lose';
        break;
      }
      default: {
        result = 'roll again';
      }
    }
    const obj: Simulation = {
      dice1: dice1 as DiceRoll,
      dice2: dice2 as DiceRoll,
      sum,
      result: result as 'win' | 'lose' | 'roll again',
    };
    sims.push(obj);
  }
  return sims;
}
