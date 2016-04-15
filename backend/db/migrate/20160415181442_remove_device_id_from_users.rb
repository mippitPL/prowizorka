class RemoveDeviceIdFromUsers < ActiveRecord::Migration
  def change
	remove_column :users, :device_id
  end
end
