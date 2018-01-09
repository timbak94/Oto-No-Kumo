export const fetchComments = (id) => {
  return $.ajax({
   method: 'GET',
   url: `/api/comments?track_id=${id}`,
 });
};
