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
    uploaded_io = params[:image]

    performance = Performance.create!(
      kind:              params[:kind],
      short_description: params[:short_description],
      user_id:           params[:user_id],
      lat:               params[:lat],
      long:              params[:long],
      picture_filename:  uploaded_io.original_filename)

    File.open(Rails.root.join('public', 'uploaded', uploaded_io.original_filename), 'wb') do |file|
      file.write(uploaded_io.read)
    end

    render json: performance
  end
end
