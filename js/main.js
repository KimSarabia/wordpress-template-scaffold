'use strict';

$('#auto').click(function() {
  $('.practiceareatext').html('Automobile Accidents');
});

$('#slip').click(function() {
  $('.practiceareatext').html('Slip and Fall');
});

$('#workcomp').click(function() {
  $('.practiceareatext').html('Workers Compensation');
});

$('#wrongfuldeath').click(function() {
  $('.practiceareatext').html('Wrongful Death');
});

$('#trucking').click(function() {
  $('.practiceareatext').html('Trucking Accidents');
});

$('#tbi').click(function() {
  $('.practiceareatext').html('Traumatic Brain Injury');
});

$('#spi').click(function() {
  $('.practiceareatext').html('Spinal Cord Injury');
});

$('#liability').click(function() {
  $('.practiceareatext').html('Products Liability');
});

$('#motorcycle').click(function() {
  $('.practiceareatext').html('Motorcycle Accidents');
});

$('#medmal').click(function() {
  $('.practiceareatext').html('Medical Malpractice');
});

$('#insure').click(function() {
  $('.practiceareatext').html('Insurance Bad Faith');
});

$('#dog').click(function() {
  $('.practiceareatext').html('Dog Bite Litigation');
});

$('#muni').click(function() {
  $('.practiceareatext').html('Municipal Court');
});


$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });
});
