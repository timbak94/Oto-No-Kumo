export const fetchComments = (id) => {
  return $.ajax({
   method: 'GET',
   url: `/api/comments?track_id=${id}`,
 });
};

export const newComment = (comment) => {
  return $.ajax({
    method: "POST",
    url: `/api/tracks/${comment.track_id}/comments`,
    data: { comment }
  });
};
