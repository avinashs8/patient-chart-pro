class PrescriptionsController < ApplicationController
    before_action :authorize

    def index
        render json: Prescription.all, status: :ok
    end

    def create
        prescription = Prescription.create(prescription_params)
        if prescription.valid?
            render json: prescription, status: :created
        else
            render json: { errors: prescription.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        prescription = Prescription.find_by(id: params[:id])
        if prescription.update(prescription_params)
            render json: prescription, status: :ok 
        else
            render json: { errors: prescription.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        prescription = Prescription.find_by(id: params[:id])
        if prescription.destroy 
            head :no_content
        else
            render json: { errors: prescription.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def prescription_params
        params.permit(:medication, :dose, :instructions, :quantity, :patient_id, :user_id, :pharmacy_id)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
