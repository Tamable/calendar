class Api::EventsController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :delete]

  def index
    @events = Event.all
  end

  def new
    @event = Event.new
  end

  def show
    @event = Event.find(params[:id])
  end

  def create
    @event = Event.new(event_params)
    @event.user_id = current_user.id

    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def edit

  end

  def update
    @event = current_user.events.find(params[:id])

    if @event.update(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    event = current_user.events.find(params[:id])
    event.destroy
  end

  private
  def event_params
    params.require(:event).permit(:title, :description, :start, :end)
  end
end
