class PatientMailer < ApplicationMailer

    
        def new_prescription_email(email, name, doctor, pharmacy_name, pharmacy_address)
            @recipient_email = email
            @name = name
            @doctor = doctor
            @pharmacy_name = pharmacy_name
            @pharmacy_address = pharmacy_address
            mail(to: @recipient_email, subject: 'You Have a New Prescription')
        end

        def update_prescription_email(email, name, doctor, prescription_medication, prescription_dose, prescription_instructions)
            @recipient_email = email
            @name = name 
            @doctor = doctor
            @medication = prescription_medication
            @dose = prescription_dose
            @instructions = prescription_instructions
            mail(to: @recipient_email, subject: 'Your Prescription Has Been Updated')
        end

        def delete_prescription_email(email, name, doctor, medication)
            @email = email
            @name = name
            @doctor = doctor 
            @medication = medication
            mail(to: @email, subject: 'Medication has been discontinued')
        end

end
