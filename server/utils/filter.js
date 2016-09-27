
exports.filterBy = (collection, key, filter) => {
  return collection.filter((people) => {
    return people[key].toLowerCase().includes(filter.toLowerCase());
  });
}
