class CreateDoctors < ActiveRecord::Migration[7.0]
  def change
    create_table :doctors do |t|
      t.string :name
      t.string :speciality
      t.text :description
      t.float :consultation_fees
      t.integer :years_of_experience

      t.timestamps
    end
  end
end
