json.extract! user, :id, :username
json.avatar_url asset_path(user.avatar.url)
user_tracks ||= nil
if user_tracks
  json.user_tracks user_tracks, partial: 'api/tracks/track', as: :track
end
