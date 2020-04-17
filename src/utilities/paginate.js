import _ from 'lodash';

export function paginate(totalItems, perPage, whichPage) {
  const startIndex = (whichPage - 1) * perPage;
  return _(totalItems).slice(startIndex).take(perPage).value();
}
