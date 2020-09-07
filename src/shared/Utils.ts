import filter from "lodash/filter";

export function findEntityById(entities: any[], id: number): any {

  var result = filter(entities, { 'id': id });
  if (!result || result.length !== 1) {
    return null;
  }
  return result[0];
}