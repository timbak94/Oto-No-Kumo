class Track < ApplicationRecord
  GENRES = [
    "Rock",
    "Pop",
    "Hip Hip & Rap",
    "Electronic",
    "Jazz",
    "Piano",
    "Classical",
    "Idol",
    "Alternative Rock"
  ]
  
  validates :title, :description, :author_id, :genre, presence: true
  validates :genre, inclusion: { in: GENRES }


  belongs_to :user,
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id

end
