
$('body').scrollspy({ target: '#collapse navbar-collapse navHeaderCollapse' })

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})