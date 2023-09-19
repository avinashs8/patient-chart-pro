class PharmaciesController < ApplicationController

    def index
        render json: Pharmacy.all, status: :ok
    end

    def create 
        pharmacy = Pharmacy.create(pharmacy_params)
    end
end
