class PatientsController < ApplicationController
    before_action :authorize

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

    def update
        patient = Patient.find_by(id: params[:id])
        if patient.update(patient_params)
            render json: patient, status: :ok 
        else
            render json: { errors: patient.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def patient_params
        params.require(:patient).permit(:name, :date_of_birth, :email, :address, :phone_number)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
