'use strict'

const store = require('../store')

$('#change-password').hide()
$('#sign-out').hide()
$('#start-game').hide()
$('#game-index').hide()
$('#board').hide()

const signUpSuccess = function () {
  $('#message').text('Looking Fresh! Login And \nYou Are Ready to Go!')
  $('form').trigger('reset')
  $('#sign-up').hide()
}

const signUpFailure = function() {
  $('#message').text('Missing Infomation Try Again')
  $('form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#message').text('Click On StartGame To Get Tic Tac Toeing')
  console.log(store)
  store.user = response.user
  console.log('store ', store)
  $('form').trigger('reset')
  $('#start-game').show()
  $('#game-index').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#h1').hide()
  $('#img').hide()
}

const signInFailure = function () {
  $('#message').text('Your password or username is incorrect')
  $('form').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#message').text('Your password has been changed')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').text('Your new passowrd does not match')
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  $('#message').text('You have signed out')
  store.user = null
  $('form').trigger('reset')
  $('#board, #sign-out, #change-password,#game-index,#start-game').hide()
  $('#sign-in,#sign-up').show()
}

const signOutFailure = function () {
  $('#message').text('You are still signed in')
<<<<<<< HEAD

=======
>>>>>>> html
}

// const updateGameSuccess = function (response) {
//   $('#content').html('')
// }
//
// const updateGameFailure = function(response) {
//   $('#message').text('No Sweat Play A Game')
// }

module.exports = {
  signUpSuccess,
  signInFailure,
  signUpFailure,
  signInSuccess,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
<<<<<<< HEAD
  changePasswordFailure
=======
  changePasswordFailure,
  updateGameSuccess,
  updateGameFailure
>>>>>>> html
}
