class AddPictureFilenameToPerformances < ActiveRecord::Migration
  def change
    add_column :performances, :picture_filename, :string
  end
end
