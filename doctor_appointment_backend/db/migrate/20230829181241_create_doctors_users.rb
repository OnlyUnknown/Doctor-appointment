class CreateDoctorsUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :doctors_users do |t|
      t.bigint :user_id, null: false
      t.bigint :doctor_id, null: false
      t.string :city
      t.date :appointment_date
      t.timestamps
    end

    add_index :doctors_users, %i[doctor_id user_id], name: 'index_doctors_users_on_doctor_id_and_user_id'
    add_index :doctors_users, %i[user_id doctor_id], name: 'index_doctors_users_on_user_id_and_doctor_id'
  end
end
