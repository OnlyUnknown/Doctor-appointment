class RemoveImageColumn < ActiveRecord::Migration[7.0]
  def change
    remove_column :doctors, :image, :string
  end
end
