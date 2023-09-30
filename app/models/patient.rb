class Patient < ApplicationRecord
    has_many :prescriptions
    has_many :pharmacies, through: :prescriptions
    has_many :users, through: :prescriptions

    validates :name, :date_of_birth, :email, :address, :phone_number, presence: true
end
