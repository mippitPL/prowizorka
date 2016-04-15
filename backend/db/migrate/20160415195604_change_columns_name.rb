class ChangeColumnsName < ActiveRecord::Migration
  def change
    rename_column :performances, :latitude,  :lat
    rename_column :performances, :longitude, :long
  end
end
