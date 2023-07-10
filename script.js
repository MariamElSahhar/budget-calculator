// start when page is done loading
$(document).ready(function() {
  // retrieve input fields
  var inputs = document.querySelectorAll('input[type="number"]');
  inputs.forEach(function(input) {
    input.addEventListener('input', function() {
      // when empty, keep as 0
      if(input.value == '')
      input.value = 0;
      // when number is inputed, calculate price & remove zero
      else if (input.value !== '0' && input.value.startsWith('0'))
          input.value = input.value.slice(1);
      calculateBudget();
    });
  });
  
  // when result is clicked, copy value
  const click = $("#result");
  click.addEventListener("click", function() {
    navigator.clipboard.writeText(click.value);
    click.classList.add("clicked");
    setTimeout(function() {
      click.classList.remove('clicked');
    }, 400);
  });
});

// calculates and displays budget
function calculateBudget() {
  // set prices
  const full_day_catering_price = 265;
  const half_day_catering_price = 200;
  const photography_only_price = 2700;``
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

  // retrieve input value for each item
  var venue = parseInt($("#venue").val());
  var attendees = parseInt($("#attendees").val());
  var full_day_catering = parseInt($("#full-day-catering").val());
  var half_day_catering = parseInt($("#half-day-catering").val());
  var photography_only = parseInt($("#photography-only").val());
  var videography = parseInt($("#videography").val());
  var full_event_recording = parseInt($("#full-event-recording").val());
  var stage_backdrop = parseInt($("#stage-backdrop").val());
  var backdrop_banner = parseInt($("#backdrop-banner").val());
  var roll_up_banner = parseInt($("#roll-up-banner").val());
  var branded_cube_design_32cm = parseInt($("#branded-cube-design-32cm").val());
  var branded_cube_design_50cm = parseInt($("#branded-cube-design-50cm").val());
  var photo_frame_prop = parseInt($("#photo-frame-prop").val());
  var trophies = parseInt($("#trophies").val());
  var floor_stickers = parseInt($("#floor-stickers").val());
  var water_bottle_tags = parseInt($("#water-bottle-tags").val());
  var certificate_printing = parseInt($("#certificate-printing").val());
  var gift_box = parseInt($("#gift-box").val());
  var totebag_gift_set = parseInt($("#totebag-gift-set").val());
  var power_bank = parseInt($("#power-bank").val());
  var water_bottle = parseInt($("#water-bottle").val());
  var pens = parseInt($("#pens").val());
  var a5_notebook = parseInt($("#a5-notebook").val());
  var cotton_tote_bags = parseInt($("#cotton-tote-bags").val());
  var laptop_stickers = parseInt($("#laptop-stickers").val());
  var badges_lanyards = parseInt($("#badges-lanyards").val());
  
  // calculate budget
  var budget = 0;
  budget = venue +
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

  // display result in result box
  $('#result').val(budget + ' AED');
}
  

