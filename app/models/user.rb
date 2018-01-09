class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "missing-avatar.png"

  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  attr_reader :password
  has_many :comments, class_name: 'Comment', primary_key: :id, foreign_key: :author_id
  has_many :tracks, class_name: 'Track', primary_key: :id, foreign_key: :author_id

  def self.find_by_credentials(username, pass)
    user = User.find_by(username: username)
    if user && user.is_password?(pass)
      return user
    end
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def generate_unique_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.session_token
  end

end
