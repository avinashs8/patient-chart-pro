class Prescription < ApplicationRecord
    belongs_to :user
    belongs_to :patient 
    belongs_to :pharmacy

    validates :medication, :dose, :instructions, :quantity, presence: true
end
