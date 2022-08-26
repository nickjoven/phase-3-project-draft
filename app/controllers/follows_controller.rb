class FollowsController < ApplicationController
    def index
        follows = Follow.all
        render json: follows
    end

    def show
        follow = Follow.find(params[:id])
        render json: follow
    end

    def create
        follow = Follow.new(params)
    end

    def update
        follow = Follow.find(params[:id])
        if follow.update_attributes(params[:follow])
            redirect_to(follow)
        else
            render :action => edit
        end
    end
end
