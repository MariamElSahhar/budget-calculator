document.addEventListener("DOMContentLoaded", function() {
  var inputs = document.querySelectorAll('input[type="number"]');
  
  inputs.forEach(function(input) {
    input.addEventListener('input', function() {
      if(input.value == '')
        input.value = 0;
      calculateBudget();
    });
  });
});

function calculateBudget() {
  var attendees = parseInt(document.getElementById("attendees").value);
  var full_day_catering = parseInt(document.getElementById("full-day-catering").value);
  var half_day_catering = parseInt(document.getElementById("half-day-catering").value);
  var photography_only = parseInt(document.getElementById("photography-only").value);
  var videography = parseInt(document.getElementById("videography").value);
  var full_event_recording = parseInt(document.getElementById("full-event-recording").value);
  var stage_backdrop = parseInt(document.getElementById("stage-backdrop").value);
  var backdrop_banner = parseInt(document.getElementById("backdrop-banner").value);
  var roll_up_banner = parseInt(document.getElementById("roll-up-banner").value);
  var branded_cube_design_32cm = parseInt(document.getElementById("branded-cube-design-32cm").value);
  var branded_cube_design_50cm = parseInt(document.getElementById("branded-cube-design-50cm").value);
  var photo_frame_prop = parseInt(document.getElementById("photo-frame-prop").value);
  var trophies = parseInt(document.getElementById("trophies").value);
  var floor_stickers = parseInt(document.getElementById("floor-stickers").value);
  var water_bottle_tags = parseInt(document.getElementById("water-bottle-tags").value);
  var certificate_printing = parseInt(document.getElementById("certificate-printing").value);
  var gift_box = parseInt(document.getElementById("gift-box").value);
  var totebag_gift_set = parseInt(document.getElementById("totebag-gift-set").value);
  var power_bank = parseInt(document.getElementById("power-bank").value);
  var water_bottle = parseInt(document.getElementById("water-bottle").value);
  var pens = parseInt(document.getElementById("pens").value);
  var a5_notebook = parseInt(document.getElementById("a5-notebook").value);
  var cotton_tote_bags = parseInt(document.getElementById("cotton-tote-bags").value);
  var laptop_stickers = parseInt(document.getElementById("laptop-stickers").value);
  var badges_lanyards = parseInt(document.getElementById("badges-lanyards").value);
  
  
  var budget = 0;
  budget = full_day_catering * attendees * 265 + half_day_catering * attendees * 200 + photography_only * 2700 + videography * 3225 + full_event_recording * 3000 + stage_backdrop * 9750 + backdrop_banner * 3750 + roll_up_banner * 275 + branded_cube_design_32cm * 500 + branded_cube_design_50cm * 1000 + photo_frame_prop * 350 + trophies * 225 + floor_stickers * 43 + water_bottle_tags * 8 + certificate_printing * 18 + gift_box * 400 + totebag_gift_set * 35 + power_bank * 85 + water_bottle * 40 + pens * 25 + a5_notebook * 25 + cotton_tote_bags * 15 + laptop_stickers * 15 + badges_lanyards * 15;
  
  document.getElementById("result").value = budget.toLocaleString() + " AED";
  console.log(budget);
}
  

