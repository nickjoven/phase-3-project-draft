class User < ApplicationRecord
    has_many :sequences
    has_many :follows
    has_many :received_follows, foreign_key: :followed_user_id, class_name: 'Follow'
    has_many :given_follows, foreign_key: :user_id, class_name: 'Follow'
    has_many :followers, through: :received_follows, source: :follower
    has_many :followings, through: :given_follows, source: :followed_user

    def index
        @users = User.all
    end

    def show
        @user = User.find(params[:id])
    end

    def new
        @user = User.new
    end

    def create
        @user = User.new(user_params)
        flash[:notice] = 'User added!' if @user.save
    end

    def edit
        @user = User.find(params[:id])
    end

    def update
        @user = User.find(params[:id])
        flash[:notice] = 'User updated!' if @user.update_attributes(user_params)
    end

    def destroy
        @user = User.find(params[:id])
        flash[:notice] = 'User deleted!' if @user.delete
    end

    def user_params
        params.require(:user).permit(:username, :email, :password_digest)
    end



end
