class FeaturesController < ApplicationController
  def list
    result ={} 
    data = []
    
    mag_types_ids = params[:mag_type]&.gsub(" ", "")&.split(",")
    features = Feature.where(mag_type: mag_types_ids)
    features.each do |feature|
      data <<
        {
          "id": feature.id,
          "type": "type",
          "attributes": 
          {
            "external_id": feature.external_id,
            "magnitude": feature.mag,
            "place": feature.place,
            "time": feature.time,
            "tsunami": feature.tsunami,
            "mag_type": feature.mag_type,
            "title": feature.title,
            "coordinates": 
            {
              "longitude": feature.longitude,
              "latitude": feature.latitude
            }
          },
          "links": 
          {
            "external_url": feature.url
          }
        }
        
    end
    result["data"] = data

    # No me quedó del todo claro la consiga en este paso. 
    result["pagination"] = {}
    result["pagination"]["current_page"] = 1
    result["pagination"]["total"] = features.count
    result["pagination"]["per_page"] = 1000
    render json: {
      data: result["data"], 
      pagination: result["pagination"]
    } 
      
  end

  def create_comment
    feature = Feature.find(params["comment"]["id"])
    
    body = params["comment"]["body"] if params["comment"].present?
    comment = Comment.new(feature: feature, body: body)

    if comment.save
      render json: { status: 'Comment created' }, status: :created
    else
      render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
