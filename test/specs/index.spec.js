import { expect } from 'chai';

import library from 'Src/index';

describe('Library', () => {
  it('should export parseCell property', () => {
    expect(library).to.have.property('parseCell');
  });

  it('should export columnName property', () => {
    expect(library).to.have.property('columnName');
  });

  it('should export convert property', () => {
    expect(library).to.have.property('convert');
  });
});
