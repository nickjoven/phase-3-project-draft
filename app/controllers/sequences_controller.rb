class SequencesController < ApplicationController

    def index
        sequences = Sequence.all
        render json: sequences
    end

    def show
        sequence = Sequence.find(params[:id])
        render json: sequence
    end

    def create
        sequence = Sequence.new(params)
    end

    def update
        sequence = Sequence.find(params[:id])
        if sequence.update_attributes(params[:sequence])
            redirect_to(sequence)
        else
            render :action => edit
        end
    end
end
