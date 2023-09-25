class PatientMailer < ApplicationMailer

    
        def sample_email(email)
            @recipient_email = email
            mail(to: @recipient_email, subject: 'Sample Email Subject')
        end

end
