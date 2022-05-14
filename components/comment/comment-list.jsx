import CommentItem from "./comment-item";

function CommentList({ list,setNeedUpdate }) {
  function handleDelete(id) {
    fetch("/api/comments", {
      method: "DELETE",
      body: JSON.stringify(id),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((responde) => responde.json())
      .then((data) => setNeedUpdate(true));
  }
  return (
    <ul className="comment-list">
      {list.map((item) => (
        <CommentItem key={item.id} item={item} deleteItem={handleDelete} />
      ))}
    </ul>
  );
}
export default CommentList;
