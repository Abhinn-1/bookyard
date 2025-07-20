import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
    <p className='text-lg'>Available: <span className='font-semibold'>{book.isAvailable ? 'Yes' : 'No'}</span></p>
      {!book.isAvailable && (
      <p className='text-lg'>Return by: <span className='font-semibold'>{new Date(book.returnDate).toLocaleDateString()}</span></p>
      )}

  );
};

export default BooksCard;
