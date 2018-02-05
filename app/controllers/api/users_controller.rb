class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.img_url ||= "http://www.skywardimaging.com/wp-content/uploads/2015/11/default-user-image-300x300.png"
    @user.cover_url ||= "https://images.unsplash.com/photo-1494707633652-f43986561810?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4dfad53b74a1116eef8b47cf50cba066&auto=format&fit=crop&w=1524&q=80"
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

  def show
    @user = User.find_by(username: params[:username])

    if @user.nil?
      render json: ["User not found"], status: :not_found
    else
      @photos = @user.photos
      render :show
    end
  end

  def index
    @users = User.all
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :img_url, :cover_url)
  end
end
