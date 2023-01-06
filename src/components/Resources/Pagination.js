import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import Card from '../Card';

function Items({ currentItems }) {
    return (
      <div className='resources'>
        {currentItems &&
          currentItems.map((resourceItem) => <Card item={resourceItem} key={resourceItem.id} />)
        }
      </div>
    );
}

const Pagination = ({items}) => {
    const itemsPerPage = 6;
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <Items currentItems={currentItems} />
        <div className='navigation'>
            <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            />
        </div>
      </>
    );
}

export default Pagination
