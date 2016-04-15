require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  test "should get show" do
	User.create!(
	  name: "Kuba Kowalski",
	  description: "jakis noob",
	  device_id: "abcd")

	get :show, id: "abcd"

	assert_response :success

	body = JSON.parse(response.body)

	assert_equal(body["name"],        "Kuba Kowalski")
	assert_equal(body["description"], "jakis noob")
	assert_equal(body["device_id"],   "abcd")
  end

  test "lol" do
	post :create,
	  name: "Kuba Kowalski",
	  description: "jakis noob",
	  device_id: "abcd"

	body = JSON.parse(response.body)

	assert_equal(body["name"],        "Kuba Kowalski")
	assert_equal(body["description"], "jakis noob")
	assert_equal(body["device_id"],   "abcd")
  end

  test "update" do
	post :create,
	  name: "Kuba Kowalski",
	  description: "jakis noob",
	  device_id: "abcd"

	put :update,
	  id:          "abcd",
	  name:        "Jan Kowalski",
	  description: "moze jednak nie noob"

	u = User.last
	assert_equal(u.name,        "Jan Kowalski")
	assert_equal(u.description, "moze jednak nie noob")
  end
end
