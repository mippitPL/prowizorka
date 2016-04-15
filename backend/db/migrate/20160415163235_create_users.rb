class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :description
      t.string :photo_url
      t.string :device_id, null: false

      t.timestamps null: false
    end
  end
end
