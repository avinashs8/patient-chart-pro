class PrescriptionsController < ApplicationController

    def create
        prescription = Prescription.create(prescription_params)
        if prescription.valid?
            render json: prescription, status: :created
        else
            render json: { errors: prescription.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    
end
