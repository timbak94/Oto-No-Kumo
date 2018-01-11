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

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "missing-track.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  has_attached_file :track_url
  validates_attachment_content_type :track_url, :content_type => [ 'audio/mpeg', 'audio/x-mpeg', 'audio/mp3', 'audio/x-mp3', 'audio/mpeg3', 'audio/x-mpeg3', 'audio/mpg', 'audio/x-mpg', 'audio/x-mpegaudio', 'application/octet-stream' ]

  validates :title, :description, :author_id, :genre, presence: true
  validates :genre, inclusion: { in: GENRES }


  belongs_to :user,
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id
  has_many :comments,
    class_name: 'Comment',
    foreign_key: :track_id,
    primary_key: :id

    module Paperclip
      class MediaTypeSpoofDetector

        def supplied_content_type
          +      if @content_type == "application/octet-stream"
            +        @content_type = calculated_content_type
            +      else
            @content_type
            +      end
          end
        end
      end
end

module Paperclip
  class MediaTypeSpoofDetector

    def supplied_content_type
+      if @content_type == "application/octet-stream"
+        @content_type = calculated_content_type
+      else
        @content_type
+      end
    end
  end
end
