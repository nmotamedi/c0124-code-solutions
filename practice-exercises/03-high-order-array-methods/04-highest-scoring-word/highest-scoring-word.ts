export function highestScoringWord(str: string): string {
  const letters: string = 'abcdefghijklmnopqrstuvwxyz';
  const words: string[] = str.split(' ');
  const scores: number[] = words.map((word: string) => {
    const lets = word.split('');
    const score = lets.reduce((total: number, letter: string) => {
      return total + letters.indexOf(letter);
    }, 0);
    return score;
  });
  const MaxScore = scores.reduce((max: number, wordScore: number) => {
    if (wordScore > max) {
      max = wordScore;
    }
    return max;
  }, 0);
  const index = scores.indexOf(MaxScore);
  return words[index];
}
