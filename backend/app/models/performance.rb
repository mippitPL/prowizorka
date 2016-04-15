class Performance < ActiveRecord::Base
  belongs_to :user

  def likes
	42
  end

  def picture_url
	arr = [
	  "http://192.168.47.42:3000/pic1.jpg",
	  "http://192.168.47.42:3000/pic1.jpg",
	  "http://192.168.47.42:3000/pic1.jpg",
	  "http://192.168.47.42:3000/pic1.jpg"
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
