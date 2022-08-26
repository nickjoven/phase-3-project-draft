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

    def login
        user = User.find_by!(username: params[:username])
        if user && user.password_digest == params[:password]
            render json: user, status: :ok
        else
            render json: {error: 'Invalid email password'}, status: 404
        end
    end

    def signup
        user = User.create(
            username: params[:username], 
            email: params[:email], 
            password_digest: params[:password_digest], 
            location: params[:location],
            image: params[:image] 
        )
        if user.save
            render json: user
        end
    end

end
