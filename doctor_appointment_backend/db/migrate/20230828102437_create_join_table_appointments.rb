# frozen_string_literal: true

class CreateJoinTableAppointments < ActiveRecord::Migration[7.0]
  def change
    create_join_table :users, :doctors do |t|
      t.index %i[user_id doctor_id]
      t.index %i[doctor_id user_id]
      t.string :city
      t.date :appontment_date
    end
  end
end
