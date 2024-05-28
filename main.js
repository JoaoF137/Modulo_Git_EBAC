$('form').on('submit', function(e) {
    e.preventDefault();
    const nomeNovaAtividade = $('#nomeTarefa').val(); 
    const novaAtividade = $(`<li>${nomeNovaAtividade}</li>`);
    $("#listaTarefas").append(novaAtividade)
})


$(document).on('click','li', function() {
    $(this).toggleClass('tachado');
});