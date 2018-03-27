class User < ApplicationRecord
  has_many :post
  validates :email, uniqueness: true, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: [:create, :update] }

  def self.signin(credentials)
    user = User.find_by(email: credentials[:email])
  end
end
