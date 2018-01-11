class Api::TracksController < ApplicationController

  def index
    if params[:userId]
      @tracks = User.find(params[:userId]).commentedTracks
    elsif params[:genre]
      @tracks = Track.where(genre: params[:genre]).order(play_count: :desc).limit(10)
    end
  end

  def show
    @track = Track.find(params[:id].to_i)
    if @track
      render :show
    else
      render json: ['Track Not Found'], status: 404
    end
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      render :show
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def update
    @track = Track.find(params[:id])

    if @track
      @track.update(track_params)
      render :show
    else
      render json: ['Track Not Found'], status: 404
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy

    render :show
  end

  def track_params
    params.require(:track).permit(:title, :description, :author_id, :genre, :image, :track_url, :play_count)
  end
end
