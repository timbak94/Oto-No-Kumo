class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.where("track_id = ?", params[:track_id])
  end

  def show
    @comment = Comment.find(params[:id].to_i)
    if @comment
      render :show
    else
      render json: ['Comment Not Found'], status: 404
    end
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy

    render :show
  end

  def comment_params
    params.require(:comment).permit(:body, :author_id, :track_id)
  end
end
