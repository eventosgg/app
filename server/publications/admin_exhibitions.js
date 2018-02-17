Meteor.publish('adminExhibitions', function() {
  return Exhibitions.find();
});


Meteor.methods({
  addTrip: function(exhibition,trip){

    Exhibitions.update(exhibition._id,{
        $push : {
          trips : trip
        }
    });
  },
  removeTrip: function(exhibitionID,tripSlug){

    Exhibitions.update(exhibitionID,{
        $pull : {
          trips : {
            tripSlug : tripSlug
          }
        }
    });
  },
  updateTrip: function(exhibitionID,tripSlug,trip){

    Exhibitions.update(
      {"trips.tripSlug": tripSlug},
      {
        $set: {
          "trips.$" : trip
        }
      }
    );
  },
  updateExhibition: function(exhibitionID,exhibition){

      Exhibitions.update(exhibitionID,{
        $set:{
          slug: exhibition.slug,
          status: exhibition.status,
          fullName: exhibition.fullName,

          thumbnail_img_url: exhibition.thumbnail_img_url,
          thumbnail_title: exhibition.thumbnail_title,
          thumbnail_subtitle: exhibition.thumbnail_subtitle,
          thumbnail_start_date: exhibition.thumbnail_start_date,
          thumbnail_end_date: exhibition.thumbnail_end_date,

          thumbnail_content: exhibition.thumbnail_content,

          page_img_url: exhibition.page_img_url,
          page_title: exhibition.page_title,
          page_subtitle: exhibition.page_subtitle
        }
      });
    }
});
