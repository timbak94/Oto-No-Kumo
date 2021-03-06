
export const getTrack = (trackId) => {
  return $.ajax({
    method: 'GET',
    url: `api/tracks/${trackId}`
  });
};

export const createTrack = (formData) => {
  return $.ajax({
   method: 'POST',
   url: `/api/users/${formData.get("track[author_id]")}/tracks`,
   contentType: false,
   processData: false,
   data: formData
 });
};

export const editTrack = (formData) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/tracks/${formData.get("id")}`,
    contentType: false,
    processData: false,
    data: formData
  });
};

export const deleteTrack = (trackId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/tracks/${trackId}`
  });
};

export const fetchCommentedTracks = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `api/tracks?user_id=${userId}`
  });
};

export const fetchChartTracks = (genre) => {
  return $.ajax({
    method: 'GET',
    url: `api/tracks?genre=${genre}`
  });
};

export const increasePlayCount = (song) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/tracks/${song.id}`,
    data: { track: song }
  });
};
