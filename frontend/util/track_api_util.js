
export const getTrack = (trackId) => {
  return $.ajax({
    method: 'GET',
    url: `api/tracks/${trackId}`
  });
};

export const createTrack = (track) => {
  return $.ajax({
   method: 'POST',
   url: `/api/users/${track.author_id}/tracks`,
   data: { track }
 });
};

export const editTrack = (track) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/tracks/${track.id}`
  });
};

export const deleteTrack = (trackId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/tracks/${trackId}`
  });
};
