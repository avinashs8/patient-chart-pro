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

        def update_prescription_email
          email = params[:email]
          name = params[:name]
          doctor = params[:user]
          prescription_params = params[:prescription]
          prescription_medication = prescription_params[:medication]
          prescription_dose = prescription_params[:dose]
          prescription_instructions = prescription_params[:instructions]
          PatientMailer.update_prescription_email(email, name, doctor, prescription_medication, prescription_dose, prescription_instructions).deliver_now
          render json: { message: 'Email sent successfully' }
        end

        def delete_prescription_email
          email = params[:email]
          name = params[:name]
          doctor = params[:user]
          medication = params[:prescription]
          PatientMailer.delete_prescription_email(email, name, doctor, medication).deliver_now
          render json: { message: 'Email sent successfully' }
        end
end
