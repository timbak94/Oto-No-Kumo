export const RECEIVE_CURRENT_SONG = "RECEVIE_CURRENT_SONG";
export const PLAY_SONG = "PLAY_SONG";
export const STOP_SONG = "STOP_SONG";
export const NEXT_SONG = "NEXT_SONG";
export const PAUSE_SONG = "PAUSE_SONG";
export const SEEK_SONG = "SEEK_SONG";

export const requestCurrentSong = (song) => {
  return {
    type: RECEIVE_CURRENT_SONG,
    song: song
  };
};

export const playSong = () => {
  return {
    type: PLAY_SONG
  };
};

export const stopSong = () => {
  return {
    type: STOP_SONG
  };
};

export const nextSong = () => {
  return {
    type: NEXT_SONG
  };
};

export const pauseSong = () => {
  return {
    type: PAUSE_SONG
  };
};

export const seekSong = (time) => {
  return {
    type: SEEK_SONG,
    time: time
  };
};
