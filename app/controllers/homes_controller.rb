class HomesController < ApplicationController

  def show
    @home = Home.find(1)
    @builder = @home.builder
    p @home
    p @builder
  end

end