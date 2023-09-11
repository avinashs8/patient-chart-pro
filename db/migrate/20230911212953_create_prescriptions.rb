class CreatePrescriptions < ActiveRecord::Migration[6.1]
  def change
    create_table :prescriptions do |t|
      t.string :medication
      t.string :dose
      t.string :instructions
      t.integer :quantity
      t.integer :patient_id
      t.integer :user_id
      t.integer :pharmacy_id

      t.timestamps
    end
  end
end
