import React from 'react';

function BookDetails() {
  const books = [
    { id: 101, bname: "Master React", price: 670 },
    { id: 102, bname: "Deep Dive into Angular 11", price: 800 },
    { id: 103, bname: "Mongo Essentials", price: 450 }
  ];

  return (
    <div className="details-card">
      <h2>Book Details</h2>
      {books && books.length > 0 ? (
        books.map(book => (
          <div key={book.id} className="item-info">
            <p><strong>Book Name:</strong> {book.bname}</p>
            <p><strong>Price:</strong> Rs. {book.price}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
}

export default BookDetails;
