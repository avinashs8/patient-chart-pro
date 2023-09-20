class PatientSerializer < ActiveModel::Serializer
  attributes :id, :name, :date_of_birth, :email, :address, :phone_number
  has_many :prescriptions 
end
