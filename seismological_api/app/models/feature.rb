class Feature < ApplicationRecord
    has_many :comments

    validates :title, :url, :place, :mag_type, :latitude, :longitude, presence: :true
    validates :external_id, uniqueness: true
end
