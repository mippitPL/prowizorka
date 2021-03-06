require 'test_helper'

class UsersControllerTest < ActionController::TestCase
  test "should get show" do
    u = User.create!(
      name: "Kuba Kowalski",
      description: "jakis noob")

    get :show, id: u.id

    assert_response :success

    body = JSON.parse(response.body)

    assert_equal(body["name"],        "Kuba Kowalski")
    assert_equal(body["description"], "jakis noob")
  end

  test "lol789" do
    post :create,
      name: "Kuba Kowalski",
      description: "jakis noob"

    body = JSON.parse(response.body)

    assert_equal(body["name"],        "Kuba Kowalski")
    assert_equal(body["description"], "jakis noob")
  end

  test "update" do
    post :create,
      name: "Kuba Kowalski",
      description: "jakis noob"

    u = User.last

    put :update,
      id:          u.id,
      name:        "Jan Kowalski",
      description: "moze jednak nie noob"

    u = User.last
    assert_equal(u.name,        "Jan Kowalski")
    assert_equal(u.description, "moze jednak nie noob")
  end

  test "lol" do
    Performance.create!(
      user_id: 1,
      kind: "temporary",
      short_description: "Szarpie na gitarze",
      latitude: "57.01",
      longitude: "43.02")

    Performance.create!(
      user_id: 2,
      kind: "temporary",
      short_description: "Szarpie na dudach",
      latitude: "57.01",
      longitude: "43.02")

    get :performances, id: 1

    body = JSON.parse(response.body)

    assert_equal(body.size, 1)
    assert_equal(body.first["short_description"], "Szarpie na gitarze")
  end
end
