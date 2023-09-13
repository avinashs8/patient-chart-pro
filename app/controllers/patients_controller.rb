class PatientsController < ApplicationController

    def index
        render json: Patient.all, status: :ok
    end

    def create
        patient = Patient.create(patient_params)
        if patient.valid?
            render json: patient, status: :created
        else
            render json: { errors: patient.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def patient_params
        params.permit(:name, :date_of_birth, :email, :address, :phone_number)
    end
end
