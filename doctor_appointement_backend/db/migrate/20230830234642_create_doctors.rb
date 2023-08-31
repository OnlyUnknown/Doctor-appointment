class CreateDoctors < ActiveRecord::Migration[7.0]
  def change
    create_table :doctors do |t|
      t.string :name
      t.string :speciality
      t.text :description
      t.integer :experience
      t.decimal :fees, precision: 10, scale: 2
      t.string :image

      t.timestamps
    end
  end
end
