class Sequence < ApplicationRecord
    belongs_to :user

    def index
        @sequences = Sequence.all
    end

    def show
        @sequence = Sequence.find(params[:id])
    end

    def new
        @sequence = Sequence.new
    end

    def create
        @sequence = Sequence.new(sequence_params)
        flash[:notice] = 'Sequence added!' if @sequence.save
    end

    def edit
        @sequence = Sequence.find(params[:id])
    end

    def update
        @sequence = Sequence.find(params[:id])
        flash[:notice] = 'Sequence updated!' if @sequence.update_attributes(sequence_params)
    end

    def destroy
        @sequence = Sequence.find(params[:id])
        flash[:notice] = 'Sequence deleted!' if @sequence.delete
    end

    def sequence_params
        params.require(:sequence).permit(:title, :pattern, :user_id)
    end

end
