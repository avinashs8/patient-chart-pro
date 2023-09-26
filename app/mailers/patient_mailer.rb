class PatientMailer < ApplicationMailer

    
        def new_prescription_email(email, name, doctor, pharmacy_name, pharmacy_address)
            @recipient_email = email
            @name = name
            @doctor = doctor
            @pharmacy_name = pharmacy_name
            @pharmacy_address = pharmacy_address
            mail(to: @recipient_email, subject: 'You Have a New Prescription')
        end

end
