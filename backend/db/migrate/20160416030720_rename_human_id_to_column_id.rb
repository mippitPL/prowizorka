class RenameHumanIdToColumnId < ActiveRecord::Migration
  def change
    rename_column :likes, :human_id, :user_id
  end
end
