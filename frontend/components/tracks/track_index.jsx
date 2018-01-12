import React from 'react';
import TrackIndexItemContainer from './track_index_item_container';

const TrackIndex = (props) => {
  return (
    <section className={`${props.style}-track`}>
    {props.tracks.map(track => (
      <TrackIndexItemContainer
      track={track}
      key={track.id}
      style={props.style}
      />
    ))}
    </section>
  );
};

export default TrackIndex;
