import React, { Component } from 'react';
import _ from 'lodash';

class Pagination extends Component {
  render() {
    const { itemsCount, perPage, currentPage, onPageChange } = this.props;
    const totalPages = Math.ceil(itemsCount / perPage);

    if (totalPages === 1) return null;

    // const pages = Array.from({ length: totalPages }, (_, index) => index + 1); // Without lodash
    const pages = _.range(1, totalPages + 1); // Using lodash

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => (
            <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
