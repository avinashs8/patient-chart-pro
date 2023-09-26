class PatientMailerController < ApplicationController
    
        def new_prescription_email
          email = params[:email]
          name = params[:name]
          doctor = params[:user]
          pharmacy_params = params[:pharmacy]
          pharmacy_name = pharmacy_params[:name]
          pharmacy_address = pharmacy_params[:address]
          PatientMailer.new_prescription_email(email, name, doctor, pharmacy_name, pharmacy_address).deliver_now
          render json: { message: 'Email sent successfully' }
        end
end
