class LikesController < ApplicationController
  def toggle
    like = Like.where(
      artist_id: params[:artist_id],
      user_id:   params[:user_id]).first

    if like.present?
      like.destroy
      render json: { status: "removed" }
    else
      Like.create!(
	artist_id: params[:artist_id],
	user_id:   params[:user_id])
      render json: { status: "added" }
    end
  end
end
