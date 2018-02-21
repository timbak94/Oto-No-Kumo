song_https = track.track_url.url[0..3] + "s" + track.track_url.url[4..-1]
image_https = track.image.url[0..3] + "s" + track.image.url[4..-1]

json.extract! track, :id, :author_id, :title, :description, :genre, :play_count
json.image_url asset_path(image_https)
json.song_url asset_path(song_https)
