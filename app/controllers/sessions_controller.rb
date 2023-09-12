class SessionsController < ApplicationController

    #signin
    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id 
            render json: user, status: :ok
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    #signout
    def destroy
        session.clear
    end
end
