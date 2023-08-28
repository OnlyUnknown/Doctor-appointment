class CreateJoinTableAppointments < ActiveRecord::Migration[7.0]
  def change
    create_join_table :users, :doctors do |t|
      t.index [:user_id, :doctor_id]
      t.index [:doctor_id, :user_id]
      t.string :city
      t.date :appontment_date
    end
  end
end
