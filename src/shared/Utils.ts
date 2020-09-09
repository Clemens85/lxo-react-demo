import filter from "lodash/filter";

export function findEntityById(entities: any[], id: any): any {

  var result = filter(entities, { 'id': id });
  if (!result || result.length !== 1) {
    return null;
  }
  return result[0];
}

export function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

export function isStringEmpty(s: string|undefined|null): boolean {
  return !s || s.length === 0;
}

export function toArray<V>(record: Record<any, V>): Array<V> {
  const result = [];
  for (let key in record) {
    result.push(record[key]);
  }
  return result;
}