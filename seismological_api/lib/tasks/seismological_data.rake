require 'rest-client'
require 'json'

namespace :seismological_data do
  desc "get and save data in db"
  task get_save_data: :environment do
    url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"
    response = RestClient.get(url)
    results = JSON.parse(response.body)

    results["features"].each do |feature|
      next if feature["properties"]["title"].blank? ||
              feature["properties"]["url"].blank? ||
              feature["properties"]["place"].blank? ||
              feature["properties"]["magType"].blank? ||
              feature["geometry"]["coordinates"][0].blank? ||
              feature["geometry"]["coordinates"][1].blank?

      mag = feature["properties"]["mag"].to_f
      latitude = feature["geometry"]["coordinates"][1].to_f
      longitude = feature["geometry"]["coordinates"][0].to_f

      next if mag < -1.0 || mag > 10.0 || latitude < -90.0 || latitude > 90.0 || longitude < -180.0 || longitude > 180.0

      next if Feature.exists?(external_id: feature["id"])

      Feature.create!(
        external_id: feature["id"],
        mag: mag,
        place: feature["properties"]["place"],
        time: Time.at(feature["properties"]["time"] / 1000),
        url: feature["properties"]["url"],
        tsunami: feature["properties"]["tsunami"],
        mag_type: feature["properties"]["magType"],
        title: feature["properties"]["title"],
        longitude: longitude,
        latitude: latitude,
      )
    end
  end
end
