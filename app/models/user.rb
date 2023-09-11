class User < ApplicationRecord
    has_many :prescriptions, dependent: :destroy
    has_many :patients, through: :prescriptions
    has_many :pharmacies, through: :prescriptions
end
