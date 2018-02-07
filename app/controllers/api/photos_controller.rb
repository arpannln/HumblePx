class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    @photo.author_id = current_user.id
    if @photo.save
      render json: @photo, status: 200
    else
      render json: @photo.errors.full_messages
    end
  end

  def show
    @photo = Photo.find(params[:id])
    return render json: ["Photo not found"], status: 422 unless @photo
    render json: @photo, include: [:author, :likers], status: 200
  end

  def edit
    @photo = Photo.find(params[:id])
    if @photo.update(photo_params)
      render json: @photo, include: [:author], status: 200
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def delete
    @photo = Photo.find(params[:id])
    return render json: ["Photo not found"], status: 422 unless @photo
    @photo.delete
  end

  def index
    @photos = Photo.all
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :img_url, :author_id, :caption)
  end
end
