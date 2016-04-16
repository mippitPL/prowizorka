class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :artist_id
      t.integer :human_id

      t.timestamps null: false
    end
  end
end
