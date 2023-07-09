// when the page is loaded
document.addEventListener("DOMContentLoaded", function() {
  var inputs = document.querySelectorAll('input[type="number"]');
  
  inputs.forEach(function(input) {
    input.addEventListener('input', function() {
      // ensure empty input fields are set to 0
      if(input.value == '')
        input.value = 0;
      // remove the first 0 if a number is entered
      else if (input.value !== '0' && input.value.startsWith('0'))
          input.value = input.value.slice(1);
      calculateBudget();
    });
  });

  // copy the value upon clicking the result button  
  const click = document.getElementById("result");
  click.addEventListener("click", function() {
    navigator.clipboard.writeText(click.value);
    click.classList.add("clicked");
    setTimeout(function() {
      click.classList.remove('clicked');
    }, 400);
  });
});

// calculate the budget
function calculateBudget() {
  // set price
  const full_day_catering_price = 265;
  const half_day_catering_price = 200;
  const photography_only_price = 2700;
  const videography_price = 3225;
  const full_event_recording_price = 3000;
  const stage_backdrop_price = 9750;
  const backdrop_banner_price = 3750;
  const roll_up_banner_price = 275;
  const branded_cube_design_32cm_price = 500;
  const branded_cube_design_50cm_price = 1000;
  const photo_frame_prop_price = 350;
  const trophies_price = 225;
  const floor_stickers_price = 43;
  const water_bottle_tags_price = 8;
  const certificate_printing_price = 18;
  const gift_box_price = 400;
  const totebag_gift_set_price = 35;
  const power_bank_price = 85;
  const water_bottle_price = 40;
  const pens_price = 25;
  const a5_notebook_price = 25;
  const cotton_tote_bags_price = 15;
  const laptop_stickers_price = 15;
  const badges_lanyards_price = 15;

  // retrieve values by id from the html
  var venue = parseInt(document.getElementById("venue").value);
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
  
  // calculate total price  
  var budget = 0;
  const budget = venue +
  full_day_catering * attendees * full_day_catering_price +
  half_day_catering * attendees * half_day_catering_price +
  photography_only * photography_only_price +
  videography * videography_price +
  full_event_recording * full_event_recording_price +
  stage_backdrop * stage_backdrop_price +
  backdrop_banner * backdrop_banner_price +
  roll_up_banner * roll_up_banner_price +
  branded_cube_design_32cm * branded_cube_design_32cm_price +
  branded_cube_design_50cm * branded_cube_design_50cm_price +
  photo_frame_prop * photo_frame_prop_price +
  trophies * trophies_price +
  floor_stickers * floor_stickers_price +
  water_bottle_tags * water_bottle_tags_price +
  certificate_printing * certificate_printing_price +
  gift_box * gift_box_price +
  totebag_gift_set * totebag_gift_set_price +
  power_bank * power_bank_price +
  water_bottle * water_bottle_price +
  pens * pens_price +
  a5_notebook * a5_notebook_price +
  cotton_tote_bags * cotton_tote_bags_price +
  laptop_stickers * laptop_stickers_price +
  badges_lanyards * badges_lanyards_price;

  // print price followed by "AED"
  document.getElementById("result").value = budget.toLocaleString() + " AED";
}
  

