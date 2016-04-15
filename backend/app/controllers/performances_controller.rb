class PerformancesController < ApplicationController
  def index
    performances = Performance.all
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
      lat:          params[:lat],
      long:         params[:long])

    render json: performance
  end
end
