class User < ApplicationRecord
    has_secure_password

    has_many :prescriptions, dependent: :destroy
    has_many :patients, through: :prescriptions
    has_many :pharmacies, through: :prescriptions

    validates :name, :password, :password_confirmation, :email, :specialization, :address, :phone_number, presence: true
end
