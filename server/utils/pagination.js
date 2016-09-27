exports.paginate = (collection, page, size) => {
  const PAGE_SIZE = size || 10;
  const PAGE = page || 1

  return  {
    total: collection.length,
    perPage: PAGE_SIZE,
    currentPage: PAGE,
    hits: collection.slice(((PAGE - 1) * PAGE_SIZE), PAGE_SIZE * PAGE)
  }
}
