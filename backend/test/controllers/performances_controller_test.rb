require 'test_helper'

class PerformancesControllerTest < ActionController::TestCase
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

    get :index,
      user_id: 1

    body = JSON.parse(response.body)

    assert_equal(body.size, 1)
    assert_equal(body.first["short_description"], "Szarpie na gitarze")
  end

  test "lol2" do
    p = Performance.create!(
      user_id: 1,
      kind: "temporary",
      short_description: "Szarpie na gitarze",
      latitude: "57.01",
      longitude: "43.02")

    get :show,
      id: p.id

    body = JSON.parse(response.body)

    assert_equal(body["short_description"], "Szarpie na gitarze")
  end

  test "lol3" do
    post :create,
      kind:              "temporary",
      short_description: "Szarpie na gitarze",
      latitude:          "51.02",
      longitude:         "23.40",
      user_id:           "3"

    body = JSON.parse(response.body)

    assert_equal(body["kind"],              "temporary")
    assert_equal(body["short_description"], "Szarpie na gitarze")
  end
end
