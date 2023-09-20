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

    def prescription_params
        params.permit(:medication, :dose, :instructions, :quantity, :patient_id, :user_id, :pharmacy_id)
    end
end
