class HomesController < ApplicationController

  def show
    @home = Home.find(params[:id])
    @builder = @home.builder
  end

end