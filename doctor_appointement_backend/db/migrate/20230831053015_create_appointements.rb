class CreateAppointements < ActiveRecord::Migration[7.0]
  def change
    create_table :appointements do |t|
      t.string :city
      t.string :date
      t.string :time
      t.references :doctor, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
