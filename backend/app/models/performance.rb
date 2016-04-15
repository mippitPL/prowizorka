class Performance < ActiveRecord::Base
  belongs_to :user

  def likes
	42
  end

  def picture_url
	arr = [
	  "http://192.168.47.42:3000/user1.jpg",
	  "http://192.168.47.42:3000/user2.jpg",
	  "http://192.168.47.42:3000/user3.jpg",
	  "http://192.168.47.42:3000/user4.jpg"
	]
	arr[user_id % 4]
  end

  def as_json(*)
	super.merge({
	  likes:       likes,
	  picture_url: picture_url,
	})
  end
end
