class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def create
        user = User.new(params)
    end

    def update
        user = User.find(params[:id])
        if user.update_attributes(params[:user])
            redirect_to(user)
        else
            render :action => edit
        end
    end
end
