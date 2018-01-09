import React from 'react';
import TrackIndexItemContainer from './track_index_item_container';

const TrackIndex = (props) => {
  return (
    <div>
    {props.tracks.map(track => (
      <TrackIndexItemContainer
      track={track}
      key={track.id}
      style={props.style}
      />
    ))}
    </div>
  );
};

export default TrackIndex;
