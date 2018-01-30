class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :require_login

  def login!(user)
    session[:session_token] = user.session_token
    @current_user = user
  end

  def current_user
    @current_user = User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def require_login
    render json: { base: ['invalid credentials'] }, status: 401
  end
  
  def logout!
    @current_user.try(:reset_session_token!)
    session[:session_token] = nil
  end
end
