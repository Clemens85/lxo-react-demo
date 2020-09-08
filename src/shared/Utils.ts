import filter from "lodash/filter";

export function findEntityById(entities: any[], id: number): any {

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