class UsersController < ApplicationController

    #signup
    def create
        user = User.create(user_params)
        byebug
        if user.valid?
            session[:user_id] = user.id 
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        user = User.find(session[:user_id])
        render json: user, status: :ok
    end

    private

    def user_params
        params.permit(:name, :password, :password_confirmation, :email, :specialization, :address, :phone_number)
    end
end
