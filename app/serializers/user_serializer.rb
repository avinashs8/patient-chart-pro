class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :email, :specialization, :address, :phone_number
end
