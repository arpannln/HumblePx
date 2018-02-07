class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    if @like.save
      render json: @like, status: 200
    else
      render json: @like.errors.full_messages
    end

  end


  def destroy
    @like = Like.find_by({user_id: current_user.id, photo_id: params[:id]} )
    p @like
    return render json: ["Not liked"], status: 422 unless @like
    @like.delete
  end

  private

  def like_params
    params.require(:like).permit(:photo_id)
  end
end
