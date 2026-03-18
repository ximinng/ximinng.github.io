/* Publications topic filter */
function filterPubs(topic, btn) {
  document.querySelectorAll('.pub-topic-group').forEach(function(el) {
    el.classList.remove('visible');
  });
  document.querySelectorAll('.pub-filter-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  document.getElementById('pub-' + topic).classList.add('visible');
  btn.classList.add('active');
}
