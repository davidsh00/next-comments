import { useRef } from "react";
function CommentForm({handleSubmit}) {
  const inputTitle = useRef();
  const inputWriter = useRef();
  const inputMessage = useRef();

  const submitComment=(e)=>{
    e.preventDefault()
    const interedTitle=inputTitle.current.value;
    const interdWriter=inputWriter.current.value;
    const interedMessage=inputMessage.current.value;

    handleSubmit({
      title:interedTitle,
      message:interedMessage,
      writer:interdWriter
    })
  }

  return (
    <form className="comment-form" onSubmit={submitComment}>
      <div className="form-header">
        <h3>New Comment:</h3>
      </div>
      <div className="form-content">
        <div className="form-input">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" ref={inputTitle} required />
        </div>
        <div className="form-input">
          <label htmlFor="writer">Writer</label>
          <input type="text" id="writer" ref={inputWriter}required />
        </div>
        <div className="form-input">
          <label htmlFor="message">Message</label>
          <textarea id="message" ref={inputMessage} rows="5" required></textarea>
        </div>
      </div>
      <div className="form-footer">
        <button>Send</button>
      </div>
    </form>
  );
}
export default CommentForm;
