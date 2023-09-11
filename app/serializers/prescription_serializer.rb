class PrescriptionSerializer < ActiveModel::Serializer
  attributes :id, :medication, :dose, :instructions, :quantity, :patient_id, :user_id, :pharmacy_id
end
