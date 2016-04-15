class UsersController < ApplicationController
  def show
    user = User.where(id: params[:id]).first!
    render json: user
  end

  def create
    user = User.create!(
      name:        params[:name],
      description: params[:description])

    render json: user
  end

  def update
    user = User.where(id: params[:id]).first!

    user.update_attributes(
      name:        params[:name],
      description: params[:description])

    render json: user
  end

  def performances
    performances = Performance.where(id: params[:id])
    render json: performances
  end
end
