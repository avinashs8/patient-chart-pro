class Patient < ApplicationRecord
    has_many :prescriptions
    has_many :pharmacies, through: :prescriptions
    has_many :users, through: :prescriptions
end
