module V1
  class AuthenticationController < ApplicationController
    def aunthenticate_user
      user = User.find_by(email: params[:email])
      if user && user.authenticate(params[:email])
        render json: payload(user)
      else
        render json: { errors: ['Invalid Username/Password'] }, status: :unauthorized
      end
    end

    private

    def payload(user)
      return nil unless user and user.id
      {
        auth_token: JsonWebToken.encode({ user_id: uder.id }),
        user: {id: user.id, email: user.email}
      }
    end
  end
end
