function CommentItem({ item, deleteItem }) {
  return (
    <li key={item.id}>
      <div className="comment-item">
        <div className="comment-item_header">
          <svg
            onClick={() => deleteItem(item.id)}
            className="comment-item_close"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
        <h2 className="comment-item_title">{item.title}</h2>
        <p className="comment-item_message">{item.message}</p>
        <div className="comment-item_footer">
          <address className="comment-item_writer">
            Written By {item.writer}
          </address>
        </div>
      </div>
    </li>
  );
}
export default CommentItem;
