class Prescription < ApplicationRecord
    belongs_to :user
    belongs_to :patient 
    belongs_to :pharmacy
end
