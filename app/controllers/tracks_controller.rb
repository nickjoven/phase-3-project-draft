class TracksController < ApplicationController

    def index
        tracks = Track.all
        render json: tracks
    end

    def show
        track = Track.find(params[:id])
        render json: track
    end

    def create
        track = Track.new(params)
    end

    def update
        track = Track.find(params[:id])
        if track.update_attributes(params[:track])
            redirect_to(track)
        else
            render :action => edit
        end
    end
end

