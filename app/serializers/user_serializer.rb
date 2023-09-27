class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :specialization, :address, :phone_number
  has_many :patients
end
