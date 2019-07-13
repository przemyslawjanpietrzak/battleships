export type ReturnType<T> = T extends (...args: Array<any>) => infer R ? R : never;

export const getRandomNumbersFromRange = (numberCounts: number, range: number): Array<number> => {
  const result = new Set<number>();

  while (result.size >= numberCounts) {
    const point = Math.round(Math.random() * range);
    result.add(point);
  }

  return Array.from(result);
}