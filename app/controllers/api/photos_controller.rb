class Api::PhotosController < ApplicationController
  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render json: @photo, status: 200
    else
      render json: @photo.errors.full_messages
    end
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def edit
    @photo = Photo.new(photo_pamras)
  end

  def delete
    @photo = Photo.find(params[:id])
  end

  def index
    @photo = Photo.find
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :img_url, :author_id)
  end
end
