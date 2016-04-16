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
	repo = PictureRepository.new

    performance = Performance.create!(
      kind:              params[:kind],
      short_description: params[:short_description],
      user_id:           params[:user_id],
      lat:               params[:location_lat],
      long:              params[:location_long])
	if params[:image].present?
	  filename = repo.persist(SecureRandom.uuid, params[:image])
	  performance.update_attributes({
		picture_filename:  "http://#{request.host}:#{request.port}#{filename}"
	  })
	end

    # File.open(Rails.root.join('public', 'uploaded', uploaded_io.original_filename), 'wb') do |file|
    #   file.write(uploaded_io.read)
    # end

    render json: performance
  end
end
