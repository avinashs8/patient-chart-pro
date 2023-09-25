class PatientMailerController < ApplicationController
    
        def sample_email
          email = params[:email]
          PatientMailer.sample_email(email).deliver_now
          render json: { message: 'Email sent successfully' }
        end
end
