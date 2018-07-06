class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: { message: "Sorry, there is already an account with that name."}
  validates :password, length: { minimum: 8 }, allow_nil: true

  has_many :events

  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(name, password)
    user = User.find_by(username: name)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
