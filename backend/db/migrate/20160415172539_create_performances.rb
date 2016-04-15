class CreatePerformances < ActiveRecord::Migration
  def change
    create_table :performances do |t|
      t.integer :user_id
      t.string :kind
      t.text :short_description
      t.string :latitude
      t.string :longitude

      t.timestamps null: false
    end
  end
end
