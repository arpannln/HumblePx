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
  end

  def delete
  end

  def index
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :img_url, :author_id)
  end
end
