class Follow < ApplicationRecord
    belongs_to :follower, foreign_key: :follower_id, class_name: 'User'
    belongs_to :followed_user, foreign_key: :followed_user_id, class_name: 'User'

    def index
        @follows = Follow.all
    end

    def show
        @follow = Follow.find(params[:id])
    end

    def new
        @follow = Follow.new
    end

    def create
        @follow = Follow.new(params)
        flash[:notice] = 'Follow added!' if @follow.save
    end

    def edit
        @follow = Follow.find(params[:id])
    end

    def update
        @follow = Follow.find(params[:id])
        flash[:notice] = 'Follow updated!' if @follow.update_attributes(follow_params)
    end

    def destroy
        @follow = Follow.find(params[:id])
        flash[:notice] = 'follow deleted!' if @follow.delete
    end

end
