class PharmaciesController < ApplicationController
    before_action :authorize

    def index
        render json: Pharmacy.all, status: :ok
    end

    def create 
        pharmacy = Pharmacy.create(pharmacy_params)
        if pharmacy.valid?
            render json: pharmacy, status: :created
        else
            render json: { errors: pharmacy.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def pharmacy_params
        params.permit(:name, :address, :phone_number)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
end
