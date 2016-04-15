class UsersController < ApplicationController
  def show
	user = User.where(device_id: params[:id]).first
	render json: user
  end

  def create
	user = User.create!(
	  name:        params[:name],
	  description: params[:description],
	  device_id:   params[:device_id])

	render json: user
  end

  def update
  end
end
