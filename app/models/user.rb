class User < ApplicationRecord
  validates :username, :password_digest, :session_token, :avatar_url, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token, :ensure_avatar

  attr_reader :password, :avatar_url

  def self.find_by_credentials(username, pass)
    user = User.find_by(username: username)
    if user && user.is_password?(pass)
      return user
    end
    nil
  end

  def ensure_avatar
    self.avatar_url = "https://thesocietypages.org/socimages/files/2009/05/vimeo.jpg" unless self.avatar_url
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
