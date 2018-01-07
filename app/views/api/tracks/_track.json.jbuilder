json.extract! track, :id, :author_id, :title, :description, :genre
json.image_url asset_path(track.image.url)
json.song_url asset_path(track.track_url.url)