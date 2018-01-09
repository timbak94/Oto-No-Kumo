class Comment < ApplicationRecord
  validates :body, :author_id, :track_id, presence: true
  belongs_to :author, class_name: 'User', foreign_key: :author_id, primary_key: :id
  belongs_to :track, class_name: 'Track', foreign_key: :track_id, primary_key: :id
end
