class LocationsController < ApplicationController

  def index
    @homes = Home.all.select(:id, :latitude, :longitude, :builder_id)
    render json: @homes
  end

  def show
    @home = Home.find(params[:id])
    render json: @home
  end

end