class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render json: @user, status: 200
    else
      errors = @user.errors.full_messages
      if errors[0] == 'Password is too short (minimum is 6 characters)'
        errors[0] = 'Password is too short (min 6)'
      end
      render json: errors, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
