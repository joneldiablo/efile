'use strict';

import SearchFilters from '../search-filters';

describe('SearchFilters View', function() {

  beforeEach(() => {
    this.searchFilters = new SearchFilters();
  });

  it('Should run a few assertions', () => {
    expect(this.searchFilters);
  });

});
