class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    @user_tracks = @user.tracks
    @user_commented_tracks = @user.commentedTracks
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
