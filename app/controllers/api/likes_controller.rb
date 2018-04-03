class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    return if Like.find_by({user_id: current_user.id, photo_id: @like.photo_id})
    @photo = Photo.find(@like.photo_id)
    if @like.save
      render "api/photos/show"
    else
      render json: @like.errors.full_messages
    end

  end


  def destroy
    @like = Like.find_by({user_id: current_user.id, photo_id: params[:id]} )
    return render json: ["Not liked"], status: 422 unless @like
    @photo = Photo.find(@like.photo_id)
    @like.delete
    render "api/photos/show", status: 200
  end

  private

  def like_params
    params.require(:like).permit(:photo_id)
  end
end
