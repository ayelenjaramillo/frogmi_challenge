require "test_helper"

class FeaturesControllerTest < ActionDispatch::IntegrationTest
  test "should get list" do
    get features_list_url
    assert_response :success
  end

  test "should get create_comment" do
    get features_create_comment_url
    assert_response :success
  end
end
