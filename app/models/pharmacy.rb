class Pharmacy < ApplicationRecord
    has_many :prescriptions
    has_many :patients, through: :prescriptions
    has_many :users, through: :prescriptions

    validates :name, :address, :phone_number, presence: true
end
