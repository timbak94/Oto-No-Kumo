json.comments @comments do |comment|
  json.id comment.id
  json.body comment.body
  json.author_id comment.author_id
  json.track_id comment.track_id
end
