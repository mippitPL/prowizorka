class PerformancesController < ApplicationController
  def index
    performances = Performance.where(user_id: params[:user_id])
    render json: performances
  end

  def show
    performance = Performance
      .where(id: params[:id]).first
    render json: performance
  end

  def create
    performance = Performance.create!(
      kind:              params[:kind],
      short_description: params[:short_description],
      user_id:           params[:user_id],
      latitude:          params[:latitude],
      longitude:         params[:longitude])

    render json: performance
  end
end
